 var fs = require('fs');


module.exports = function(req,res){
fs.readFile('./data/groups.js','utf8',function(err,data)
            {
                if (err)
                {
                    console.log(err);
                    var groups = {};
               		var newgroupname = req.body.groupname;
               		groups[newgroupname] = req.body;
                   	fs.writeFile('./data/groups.js', JSON.stringify(groups), function (err) {
                                if (err) throw err;

                                  console.log('Created!');
                                
                   				// Updating super and group creator as an admin of newly created group
                   				fs.readFile('./data/users.js','utf8',function(err,data)
                   				{
                   					var users = JSON.parse(data);
                   					req.body.admins.forEach(function(admin)
                   					{
                   						if(!users[admin]["grouplist"].includes(req.body.groupname))
                   						{
                   							users[admin]["grouplist"].push(req.body.groupname);
                   						}
                   						
                   					});
               		 				
               		 				fs.writeFile('./data/users.js', JSON.stringify(users), function (err) {
                                	if (err) throw err;

                                  			console.log('Created!');
                                
                   				

			                   				// Sending the updated grouplist back for the current user
			                   				fs.readFile('./data/users.js','utf-8', function(err,data)
										               	{
										               		if(err) throw err;
										               		var users = JSON.parse(data);
										                    var totalgrouplist = {
										                    	grouplist : users[req.body.creator].grouplist
										                    };
										                    res.send(totalgrouplist);


							            				});
                   					});
                   				});
                   			});



                }
               	else
               	{
               		 var groups = JSON.parse(data);
               		 var newgroupname = req.body.groupname
               		 groups[newgroupname] = req.body;
               		    	fs.writeFile('./data/groups.js', JSON.stringify(groups), function (err) {
                                if (err) throw err;

                                  console.log('Replaced!');
                                
                   				// Updating super and group creator as an admin of newly created group
                   				fs.readFile('./data/users.js','utf8',function(err,data)
                   				{
                   					var users = JSON.parse(data);
                   					req.body.admins.forEach(function(admin)
                   					{
                   						if(!users[admin]["grouplist"].includes(req.body.groupname))
                   						{
                   							users[admin]["grouplist"].push(req.body.groupname);
                   						}
                   					});
               		 				
               		 				fs.writeFile('./data/users.js', JSON.stringify(users), function (err) {
                                	if (err) throw err;

                                  			console.log('Created!');
                                
                   				

			                   				// Sending the updated grouplist back 
			                   				fs.readFile('./data/users.js','utf-8', function(err,data)
										               	{
										               		if(err) throw err;
										               		var users = JSON.parse(data);
										                    var totalgrouplist = {
										                    	grouplist : users[req.body.creator].grouplist
										                    };
										                    res.send(totalgrouplist);


							            				});
                   					});
                   				});
                   			});
                   
               	}
               });	
              };
