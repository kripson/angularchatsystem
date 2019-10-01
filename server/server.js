var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors'); //import the cors package. 

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const io = require('socket.io')(http);
const PORT = 3000;

// var users = JSON.parse(fs.readFileSync("./data/users.js",'utf-8'));


app.use(cors()); // Add cors middleware to the express application
app.use(bodyParser.json());


MongoClient.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true }, async function(err, db) {

//if error connecting to the url throw error
if(err)
{
	console.log(err);
}

var dbo = db.db("test1");

//login route
require('./routes/testlogin.js')(dbo,app);

//create user route
require('./routes/testcreateuser.js')(dbo,app);


//delete a user
require('./routes/testdeleteuser.js')(dbo,app);

//Create a group
require('./routes/testcreategroup.js')(dbo,app);

//delete a group
require('./routes/testdeletegroup.js')(dbo,app);

//get details of a user
require('./routes/testgetuserdetails.js')(dbo,app);

//get details of a group
require('./routes/testgetgroupdetails.js')(dbo,app);


//get userlist if you are super
require('./routes/testgetuserlist.js')(dbo,app);

//promote user to group admin 
require('./routes/testpromotetogroupadmin.js')(dbo,app);

//create new user and add to a group
require('./routes/testcreatenewgroupuser.js')(dbo,app);

//add an existing user to a group
require('./routes/testaddusertogroup.js')(dbo,app);

//remove an existing user from a group
require('./routes/testremoveuserfromgroup.js')(dbo,app);


//create a channel in a group
require('./routes/testcreatechannel.js')(dbo,app);


//delete a channel in a group
require('./routes/testdeletechannel.js')(dbo,app);


//add an existing user to a channel
require('./routes/testaddusertochannel.js')(dbo,app);



//remove an existing user from a channel
require('./routes/testremoveuserfromchannel.js')(dbo,app);





async function getchannelhistory(groupname,channelname)
{
    var history = await new Promise((resolve,reject)=>
    {

  dbo.collection("groups").find({groupname:groupname}).toArray(function(err, result)
  {
    var group = result[0];
    resolve(group.channels[channelname].history);

  });
});
  
  return history;
}

async function updatechannelhistory(groupname,channelname,message,username)
{
    var history = await new Promise((resolve,reject)=>
    {

        dbo.collection("groups").find({groupname:groupname}).toArray(function(err, result)
        {
          var group = result[0];
          var channels = group.channels;
          channels[channelname].history.push([username,typeof(message),message]);

          var newvalues = { $set: {channels: channels } };
                    dbo.collection("groups").updateOne({groupname:groupname}, newvalues, function(err, res) {


                      resolve(channels[channelname].history);

                 });
          });

    });
  
  return history;
}


const chat = io.of('/chat');

chat.on('connection',(socket)=> 
{
  console.log(socket.id," connected");


  socket.on('sendmessage',async function(messagebody)
  {
    var history = await updatechannelhistory(messagebody.groupname,messagebody.channelname,messagebody.message,messagebody.username);
    
    console.log(history);

    chat.to(messagebody.channelname).emit('reply',JSON.stringify(history));
  });

  socket.on('joinchannel',async function(joinrequest)
  {
    socket.join(joinrequest.channelname);
    var history = await getchannelhistory(joinrequest.groupname,joinrequest.channelname);
    chat.to(joinrequest.channelname).emit('channelnotice',`A user connected to ${joinrequest.channelname}`);
    chat.to(socket.id).emit('reply',JSON.stringify(history));


  });

  socket.on('uploadimage',async function(body)
  {

    var history = await updatechannelhistory(body.groupname,body.channelname,body.image,body.username);

    history.forEach((message,index)=>
    {
      if(message[1]!== "string")
      {

        history[index][2] = history[index][2].toString('base64');

      }

    });
    
    chat.to(body.channelname).emit('reply',JSON.stringify(history));
  });

  socket.on('leavechannel',function(leaverequest)
  {
    

    socket.leave(leaverequest.channelname,()=>
      {
          chat.to(leaverequest.channelname).emit('channelnotice',`A user disconnected from the channel i.e ${leaverequest.channelname}`);
      });

  });

});





http.listen(3000);

});











