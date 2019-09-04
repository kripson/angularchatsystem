Documentation for Assignment1 



 

SANKIT MAN SHRESTHA
S5085319
Software Frameworks















Contents
Documentation for Assignment1	1
Git Repo	3
Data Structures	3
Routes and server API	4
Angular structure	5
Client Server Communication	6


























Git Repo

The structure of the git repo is fairly simple. The angular project folder was uploaded to the git hub repo frequently after every change. No any branches were created during the creation of this app since most of the tasks was done individually in a local repo.
Approach taken 
Steps
1.	Created an empty repo in github
2.	Cloned it in the local machine
3.	After any change, the files were push to the origin.

Data Structures

The information for users and groups after being passed by a user were initially stored in variables representing new users and groups which were later stored in an object as shown below:
   var nuser = {
        username: this.nusername,
        birthdate: this.nbirthdate,
        age: this.nage,
        email: this.nemail,
        ofgroupadmin: this.nofgroupadmin,
        admingrouplist: [],
        grouplist: [],
        password: this.npassword,
        valid: this.nvalid
 

var ngroup = {
        groupname: this.ngroupname,
        creator: this.username,
        admins: ['super', this.username],
        asis: ['super', this.username],
        channels: {},
        members: ['super', this.username]

These objects were passed to the server and then after error checking were changed into JSON types and stored into a data file with the help of fs file system provided by node.
The screen shot of the data stored in a datafile in JSON format is given below:
{"super":{"username":"super","birthdate":"00-00-0000","age":"999999","ofgroupadmin":true,"grouplist":["asdasdasdasd"],"admingrouplist":["asdasdasdasd"],"email":"super@gmail.com","password":"super","valid":true}}




Routes and server API


app.post('/api/auth',require('./routes/login.js'));
app.post('/createuser',require('./routes/createuser.js'));
app.post('/creategroup',require('./routes/creategroup.js'));
app.post('/deleteuser',require('./routes/deleteuser.js'));
app.post('/deletegroup',require('./routes/deletegroup.js'));
app.post('/getgroupdetail',require('./routes/getgroupdetail.js'));
app.post('/createnewgroupuser',require('./routes/createnewgroupuser.js'));
app.post('/addusertogroup',require('./routes/addusertogroup.js'));
app.post('/promotetogroupadmin',require('./routes/promotetogroupadmin.js'));

app.post('/createchannel',require('./routes/createchannel.js'));
app.post('/deletechannel',require('./routes/deletechannel.js'));

app.post('/removeuserfromgroup',require('./routes/removeuserfromgroup.js'));

app.post('/addusertochannel',require('./routes/addusertochannel.js'));



The routes in the server are displayed in the picture above and their brief description is provided below:

1.	/api/auth – This route is called from the client when user tries to login and provides the user authentication function. It taskes the details of user provided by the user through http request and sends back the details of the user if found in user data file.

2.	/createsuser- This route is called from the client when a new user is to be created. It takes details of new user from creator and updates the file after error checking and returns the updated user list for the user. (Setup so that only super gets the details of other users and others get an empty array). 
3.	/creategroup – The client can create a new group using this route. After error checking, the groups data file is updated and the updated grouplist for the client is sent back.
4.	/deletegroup – The client can delete a group using this route. After error checking, the groups data file is updated and the updated group list for the client is sent back.
5.	/deleteuser - This route is called from the client when a user is to be deleted. It takes the username and then returns the updated user list for the user. (Similar setup to creategroup).
6.	/getgroupdetail – The client can get the details of a desired group using this route. The app is setup so that details of only one group can be seen at a time.  It takes the name of the desired group from client and returns the details of the group. The amount of information returned is dependent on the client.
7.	/createnewgroupuser – The client can create a new user by passing in details and add it to the group through this route. It returns the notice of success or failure through response body and then the client updates its view using the above /getgroupdetail route.
8.	/addusertogroup – This allows the client to add an existing user to the group by passing username and role and returns the notice of success or failure and client updates its view using  /getgroupdetail route.
9.	/removeuserfromgroup - This allows the client to remove an existing user from the group by passing in an username and returns the notice of success or failure and client updates its view using  /getgroupdetail route.
10.	/promotetogroupadmin – This allows the client to promote a user to group admin role taking in an username and sending back a notice.
11.	/createchannel – Allows client to create a new channel after error checking and returns a notice.
12.	/deletechannel-  Allows client to delete a channel after error checking and returns a notice.
13.	/addusertochannel - Allows client to add a group member to a subgroup (channel) after error checking and returns a notice.



Angular structure


As we are creating a dashboard for this part, the app contains only two components: 
1)	Login component
2)	Account component

When the user enters his/her password in the login form in login component, the user details are remembered and stored in local storage  and then the app is routed to account page or the dashboard. As soon as the dashboard is loaded, it is setup using the information in local Storage.
The localStorage is frequently updated when a major change has occurred.
The logout buttons clears the localstorage and the app is routed back to login page.
No services are used in the app. The communication between client and server is carried out using the http module. The communication between server and client is explained below:
Client Server Communication
Whenever a user requests or performs a task that needs access to the database, the http module is used. The details are sent to the server using appropriate http request and then the server performs the error checking that is setup on the server. After the server performs error checking and carries out required action, the server sends back data that is used to update the view of the client. The data submitted to server by client contains some information about client so that the server can process it and send back data depending on who is requesting the data or service. Different roles i.e Super admin, group admin and users get different data back depending on their roles and permissions.






