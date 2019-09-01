var fs = require('fs');


 module.exports = function(req,res){
fs.readFile('./data/users.js','utf8',function(err,data)
            {
                if (err)
                {
                    console.log(err);
                }
               	else
               	{
               		 var users = JSON.parse(data);
               		 var newusername = req.body.username
               		 users[newusername] = req.body;
               		 fs.writeFile('./data/users.js', JSON.stringify(users), function (err)
               		    {
								  if (err) throw err;
								  fs.readFile('./data/users.js','utf-8', function(err,data)
					               	{
					               		if(err) throw err;
					               		var users = JSON.parse(data);
					                    var totaluserlist = {
					                    	userlist : []
					                    };
					                    for (var user in users)
					                    {
					                        if(user != "super")
                                            {
                                                    totaluserlist.userlist.push(user);
                                            }
					                    }
					                    console.log(totaluserlist.userlist)
					                    res.send(totaluserlist);


					               	});
						});

                   
               	}
               });

               
              };