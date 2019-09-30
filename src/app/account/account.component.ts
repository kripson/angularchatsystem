import {
	Component,
	OnInit
} from '@angular/core';
import {
	Router
} from '@angular/router';
import {
	HttpClient
} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SocketService} from '../socket.service';

// Interfaces for reply from server after a http request
interface Users {
	userlist: any;
	notice: string;
};

interface Groups {
	grouplist: any;
	admingrouplist: any;
	notice;
};

interface Group {
	groupname: string,
		isofadmin: boolean;
	isofasis: boolean;
	membercount: number;
	channels: any;
};


interface Member {
	userlist: any;
	notice: string;
}


@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  //flags to show buttons
	createnewgroupuser = false;
	addnewgroupuser = false;

//users login details
	username = "";
	birthdate = "";
	age = "";
	email = "";
	ofgroupadmin = false;
	admingrouplist = [];
	grouplist = [];
	userlist = [];

// variables for storing new user data 
	nusername = "";
	nbirthdate = "";
	nage = "";
	nemail = "";
	npassword = "";
	nofgroupadmin: any = "";
	ngrouplist = [];
	nadmingrouplist = [];
	nvalid = true;

// variables storing current veiwed group details
	detailedgroup = {
		groupname: "",
		isofadmin: false,
		isofasis: false,
		membercount: 0,
		channels: []
	};

//new group user details
	ngroupusername = "";
	ngroupbirthdate = "";
	ngroupage = "";
	ngroupemail = "";
	ngrouppassword = "";
	nofgroupasis: any = "";
	nmembergrouplist = [];
	ngroupvalid = true;
// for adding existing user to group
	groupusername = "";
	ofgroupasis: any = "";

// new group details
	ngroupname = "";

//new channel name
	nchannelname = "";

//removing user
	rusername = "";

//adding user to channel
	cusername = "";
	addtochannelname = "";

//removing user from channel
	rcusername = "";
	removefromchannelname = "";


//for chat system
	
	currentchannel = "";
	isinroom = false;
	messages = [];
	message = "";
	channelnotice = "";


	constructor(private router: Router, private httpClient: HttpClient,private socketService:SocketService) {}

	ngOnInit() {

				this.socketService.getmessage((message)=>
			  {
			  	alert(message);
			  		this.messages = JSON.parse(message);
			  });

			  this.socketService.getchannelnotice((notice)=>
			  {
			  		this.channelnotice = notice;
			  });

    //setting up page
		if (typeof (Storage) !== "undefined") {


			try {
				var userdetails = JSON.parse(localStorage.getItem("currentUser"));
				this.username = userdetails.username;
				this.birthdate = userdetails.birthdate;
				this.ofgroupadmin = userdetails.ofgroupadmin;
				this.admingrouplist = userdetails.admingrouplist;
				this.age = userdetails.age;
				this.email = userdetails.email;
				this.grouplist = userdetails.grouplist;
				this.getuserlist(this.username);


			} catch (error) {
				alert("Please Login First");
				this.router.navigateByUrl('login');
			}
		}
	}

	sendmessage()
	{
		var sendbody = {

			message:this.message,
			groupname:this.detailedgroup.groupname,
			channelname: this.currentchannel
		}

			this.socketService.sendmessage(sendbody);
					 

	}

	//function to update the userlist
	getuserlist(username)
	{
		var requestbody = {
		username:username
		}
		this.httpClient.post <any> ("http://localhost:3000/getuserlist",requestbody).subscribe(res => {


		var userdetails = JSON.parse(localStorage.getItem("currentUser"));
		userdetails.userlist = res;
		this.userlist = res;
		localStorage.setItem("currentUser",JSON.stringify(userdetails));

		});


	}

	//function to update the userdetails
	getuserdetails(username)
	{
		var requestbody = {
		username:username
		}
		this.httpClient.post <any> ("http://localhost:3000/getuserdetails",requestbody).subscribe(res => {

		

		//updating the user details
		this.username = res.username;
		this.birthdate = res.birthdate;
		this.ofgroupadmin = res.ofgroupadmin;
		this.admingrouplist = res.admingrouplist;
		this.age = res.age;
		this.email = res.email;
		this.grouplist = res.grouplist;

		//updating the localstorage

		var userdetails = JSON.parse(localStorage.getItem("currentUser"));
		userdetails.username = res.username;
		userdetails.birthdate = res.birthdate;
		userdetails.ofgroupadmin = res.ofgroupadmin;
		userdetails.admingrouplist = res.admingrouplist;
		userdetails.age = res.age;
		userdetails.email = res.email;
		userdetails.grouplist = res.grouplist;
		localStorage.setItem("currentUser",JSON.stringify(userdetails));

		});


	}

	//function to update the groupdetails
	getgroupdetails(groupname)
	{
		var requestbody = {
		groupname:groupname
		}
		this.httpClient.post <any> ("http://localhost:3000/getgroupdetails",requestbody).subscribe(res => {

		if (res.err) 
				{
					alert(res.err);
					this.getuserdetails(this.username);
					this.getuserlist(this.username);

				}
		else
		{
					//updating the current selected group details

				this.detailedgroup.groupname = res.groupname;
				this.detailedgroup.isofadmin = res.admins.includes(this.username);
				this.detailedgroup.isofasis = res.asis.includes(this.username);
				this.detailedgroup.membercount = res.members.length;
				this.getuserdetails(this.username);
				this.getuserlist(this.username);

				var requesterchannels = [];


				for(var channel in res.channels)
                    {
                        if(res.channels[channel].members.includes(this.username))
                        {
                            requesterchannels.push(channel);

                        }

                    }
                this.detailedgroup.channels = requesterchannels;
		}
					

		

		

		});


	}
	turn(num) {
		if (num == 1) {
			this.createnewgroupuser = true;
			this.addnewgroupuser = false;
		} else {
			this.addnewgroupuser = true;
			this.createnewgroupuser = false;
		}
	}

  //User logs out and localstorage is cleared 
	logout() {
		localStorage.clear();
		this.router.navigateByUrl('login');
	}


  // New user creation function
	createNewUser() {
		if (this.nofgroupadmin != "" && this.nusername != "" && this.nage != "" && this.nbirthdate != "" && this.nemail != "" && this.npassword != "" && this.nusername != "super") {


			if (this.nofgroupadmin == "true") {
				this.nofgroupadmin = true;
			} else {
				this.nofgroupadmin = false;
			}
			var body = {
				username: this.nusername,
				birthdate: this.nbirthdate,
				age: this.nage,
				email: this.nemail,
				ofgroupadmin: this.nofgroupadmin,
				admingrouplist: [],
				grouplist: [],
				password: this.npassword,
				valid: this.nvalid
			};

			this.httpClient.post<any>("http://localhost:3000/createuser", body).subscribe(res => {

				if (res.err) 
				{
					alert(res.err);

				}
				else
				{
					alert(res.message);
				}
					this.getuserlist(this.username);

				});
		} else {
			alert("Please fill out the form completely and username cant be super");
		}

	}
  // New group creation function
	createNewGroup() {

		if (this.ngroupname != "") {
			var ngroup = {
				groupname: this.ngroupname,
				creator: this.username,
				admins: ['super', this.username],
				asis: ['super', this.username],
				channels: {},
				members: ['super', this.username]
			};

			if (this.username == 'super') {
				ngroup.admins.pop();
				ngroup.members.pop();
				ngroup.asis.pop();
			}

			this.httpClient.post <any> ("http://localhost:3000/creategroup", ngroup).subscribe(res => { 
				if (res.err) 
				{
					alert(res.err);

				}
				else
				{
					alert(res.message);
				}
					this.getuserdetails(this.username);

				});

			}
			else 
			{
			alert("Please enter a group name");
			}

	}

  //deleting user function
	deleteUser(user) {
		var deluser = {
			username: user
		};
		this.httpClient.post<any>("http://localhost:3000/deleteuser", deluser).subscribe(res => {  

			if(res.err) 
			{
				alert(res.err);

			}
			else
			{
				alert("User deleted");
			}
			this.getuserlist(this.username);

				

			if (this.detailedgroup.groupname) {


				this.getgroupdetails(this.detailedgroup.groupname);
			}
		});

  }
  
   //deleting group function
	deleteGroup(group) {

		if (group == this.detailedgroup.groupname) {
			this.detailedgroup = {
				groupname: "",
				isofadmin: false,
				isofasis: false,
				membercount: 0,
				channels: []
			};
		}
		var delgroup = {
			groupname: group,
			deletor: this.username
		}
		this.httpClient.post <any> ("http://localhost:3000/deletegroup", delgroup).subscribe(res => {  


			if (res.err) 
				{
					alert(res.err);

				}
				else
				{
					alert(res.message);
				}

					if (this.detailedgroup.groupname) {


							this.getgroupdetails(this.detailedgroup.groupname);
					}
					this.getuserdetails(this.username);
					this.getuserlist(this.username);

			});

  }
  
   //function for removing detailed group when the close button is pressed
	removegroupdetails() {
		this.detailedgroup = {
			groupname: "",
			isofadmin: false,
			isofasis: false,
			membercount: 0,
			channels: []
		};
	}


  //getting group details via http request when user clicks on a group to see its details
	groupDetail(group) {


		var getgroup = {
			requester: this.username,
			groupname: group
		}
		this.httpClient.post < Group > ("http://localhost:3000/getgroupdetail", getgroup).subscribe(res => {  
			if (res.membercount) {
				if (typeof (Storage) !== "undefined") {
					this.detailedgroup.groupname = res.groupname;
					this.detailedgroup.isofadmin = res.isofadmin;
					this.detailedgroup.isofasis = res.isofasis;
					this.detailedgroup.isofadmin = res.isofadmin;
					this.detailedgroup.membercount = res.membercount;
					this.detailedgroup.channels = res.channels;

				} else {
					alert('Cannot get Group Detail');
				}
			} else {
				alert("The group seems to be deleted");
				this.grouplist = this.grouplist.filter(function (value) {

					return value != res.groupname;

				});
			}
		});


	}
  // New user creation function and adding user to the current viewing group
	addNewUserToGroup() {
		if (this.ngroupusername != "" && this.nofgroupasis != "" && this.ngroupage != "" && this.ngroupbirthdate != "" && this.ngroupemail != "" && this.ngrouppassword != "" && this.ngroupusername != "super") {


			if (this.nofgroupasis == "true") {
				this.nofgroupasis = true;
			} else {
				this.nofgroupasis = false;
			}
			var newuserdetail = {
				username: this.ngroupusername,
				birthdate: this.ngroupbirthdate,
				age: this.ngroupage,
				email: this.ngroupemail,
				ofgroupadmin: false,
				ofgroupasis: this.nofgroupasis,
				grouplist: [this.detailedgroup.groupname],
				admingrouplist: [],
				password: this.ngrouppassword,
				valid: this.ngroupvalid,
				groupname: this.detailedgroup.groupname
			}

			this.httpClient.post <any> ("http://localhost:3000/createnewgroupuser", newuserdetail).subscribe(res => {  


				if (res.err) 
				{
					alert(res.err);

				}
				else
				{
					alert(res.message);
					this.getuserlist(this.username);
					this.getgroupdetails(this.detailedgroup.groupname);
				}
				this.createnewgroupuser = false;
				this.addnewgroupuser = false;
			});
		} else {
			alert("Please fill out the form completely");
		}


	}
  //Adding an existing user to the current viewed group
	addExistingUserToGroup() {
		if (this.groupusername != "" && this.ofgroupasis != "") {
			if (this.ofgroupasis == "true") {
				this.ofgroupasis = true;
			} else {
				this.ofgroupasis = false;
			}
			var newuserdetail = {
				username: this.groupusername,
				ofgroupasis: this.ofgroupasis,
				groupname: this.detailedgroup.groupname,
				creator: this.username
			}

			this.httpClient.post <any> ("http://localhost:3000/addusertogroup", newuserdetail).subscribe(res => {  


				if (res.err) 
				{
					alert(res.err);

				}
				else
				{
					alert(res.message);
					this.getuserlist(this.username);
					this.getgroupdetails(this.detailedgroup.groupname);
				}
				this.createnewgroupuser = false;
				this.addnewgroupuser = false;
			});
		} else {
			alert("Please fill out the form properly");
		}


	}


	//Remove the user from group
	removeUserFromGroup() {

		var removeuser = {
			groupname: this.detailedgroup.groupname,
			username: this.rusername
		};
		this.httpClient.post<any>("http://localhost:3000/removeuserfromgroup", removeuser).subscribe(res => {  


			if (res.err) 
				{
					alert(res.err);

				}
				else
				{
					alert(res.message);
					this.getuserlist(this.username);
					this.getgroupdetails(this.detailedgroup.groupname);
				}
		});
	}


	//

  //function for promoting a user to group admin
	promoteToGroupAdmin(username) {

		var promoteduser = {
			username: username

		}
		this.httpClient.post < any > ("http://localhost:3000/promotetogroupadmin", promoteduser).subscribe(res => {  

			if (res.err) 
				{
					alert(res.err);

				}
				else
				{
					alert(res.message);
					this.getuserlist(this.username);
					this.getgroupdetails(this.detailedgroup.groupname);
				}
			


		});
	}

	// function  for creating new channel
	createChannel() {

		if (this.nchannelname) {
			var newchannel = {
				groupname: this.detailedgroup.groupname,
				channelname: this.nchannelname,
				members: ["super", this.username],
				admins: ["super", this.username],
				history:[]
			}

			if (this.username == 'super') {
				newchannel.admins.pop();
				newchannel.members.pop();
			}

			this.httpClient.post < any > ("http://localhost:3000/createchannel", newchannel).subscribe(res => {  

				if (res.err) 
				{
					alert(res.err);

				}
				else
				{
					alert(res.message);
					this.getgroupdetails(this.detailedgroup.groupname);
				}


			});
		} else {
			alert("Please insert a channel name");
		}


	}

	//function for deleting a channel
	deleteChannel(channel) {

		var deletechannel = {
			groupname: this.detailedgroup.groupname,
			channelname: channel,
		}


		this.httpClient.post < any > ("http://localhost:3000/deletechannel", deletechannel).subscribe(res => {  

			if (res.err) 
				{
					alert(res.err);
					this.getgroupdetails(this.detailedgroup.groupname);

				}
				else
				{
					alert(res.message);
					this.getgroupdetails(this.detailedgroup.groupname);
				}


		});


	}


	//Add a group member to a channel
	addUserToChannel() {
		if (this.cusername != "" && this.addtochannelname != "") {
			var adduser = {
				username: this.cusername,
				groupname: this.detailedgroup.groupname,
				channelname: this.addtochannelname,
			}


			this.httpClient.post <any> ("http://localhost:3000/addusertochannel", adduser).subscribe(res => {  

				if (res.err) 
				{
					alert(res.err);
					this.getgroupdetails(this.detailedgroup.groupname);

				}
				else
				{
					alert(res.message);
					this.getgroupdetails(this.detailedgroup.groupname);
				}


			});
		}


	}

	//remove a group member from a channel
	removeUserFromChannel() {
		if (this.rcusername != "" && this.removefromchannelname != "") {
			var removeuser = {
				username: this.rcusername,
				groupname: this.detailedgroup.groupname,
				channelname: this.removefromchannelname,
			}


			this.httpClient.post < any > ("http://localhost:3000/addusertochannel", removeuser).subscribe(res => {  

				if (res.err) 
				{
					alert(res.err);
					this.getgroupdetails(this.detailedgroup.groupname);

				}
				else
				{
					alert(res.message);
					this.getgroupdetails(this.detailedgroup.groupname);
				}

			});
		}


	}


	//join channel

	channelDetails(channelname)
	{

		if(!this.isinroom)
		{
			this.currentchannel = channelname;

		var joinrequest = 
		{

			channelname:channelname,
			groupname:this.detailedgroup.groupname,

		}
		this.socketService.joinchannel(joinrequest);
		}
		else
		{
			alert("Please leave the current channel first");
		}
		this.isinroom = true;

		

	}

	//join channel

	leaveChannel()
	{
		this.isinroom = false;
		var leaverequest = 
		{

			channelname:this.currentchannel,

		}
		this.socketService.leavechannel(leaverequest);
	}
		
		
}