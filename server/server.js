var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

var path = require('path');
var cors = require('cors'); //import the cors package. 

var fs = require('fs');
// Sockets import

const io = require('socket.io')(http);
const PORT = 3000;



app.use(cors()); // Add cors middleware to the express application
app.use(bodyParser.json());




// app.use(express.static(__dirname + "../dist/firstTry/"));

app.post('/api/auth',require('./routes/login.js'));
app.post('/createuser',require('./routes/createuser.js'));
app.post('/creategroup',require('./routes/creategroup.js'));
app.post('/deleteuser',require('./routes/deleteuser.js'));
app.post('/deletegroup',require('./routes/deletegroup.js'));
app.post('/getgroupdetail',require('./routes/getgroupdetail.js'));
app.post('/createnewgroupuser',require('./routes/createnewgroupuser.js'));
app.post('/addusertogroup',require('./routes/addusertogroup.js'));
app.post('/promotetogroupadmin',require('./routes/promotetogroupadmin.js'));

io.on('connection',(socket)=> 
{



// When message comes, send it back to all sockets
	socket.on('message',(message) =>
	{
		io.emit('message',message);
	}
	)
}
)


http.listen(PORT);