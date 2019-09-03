var fs = require('fs');

  module.exports = function(req,res){
         
                   
              fs.readFile('./data/users.js','utf8',function(err,data)
            {
                    var users = JSON.parse(data);
                    var requestinfo = req.body;
                    var groupname = requestinfo.groupname;
                    var isofasis = requestinfo.ofgroupasis;
                    var creator = requestinfo.creator;
                    var responsebody = {};
                    delete requestinfo.creator;
                    delete requestinfo.groupname;
                    delete requestinfo.ofgroupasis;
                    if(!users.hasOwnProperty(req.body.username))
                    {
                            users[req.body.username] = requestinfo;
                    fs.writeFile('./data/users.js', JSON.stringify(users), function (err)
                    {
                        console.log("user created and user file updated");

                                // adding the user to desired group
                                fs.readFile('./data/groups.js','utf-8',function(err,data)
                                {
                                    if(err) 
                                    {
                                        console.log(err);
                                    }
                                    else
                                    {


                                    var groups = JSON.parse(data);
                                    console.log(groups);
                                    console.log(groupname);
                                    groups[groupname].members.push(req.body.username);
                                    if(isofasis)
                                    {
                                        groups[groupname].asis.push(req.body.username);
                                    }
                                    responsebody.membercount =  groups[groupname].members.length;

                                     fs.writeFile('./data/groups.js', JSON.stringify(groups), function (err)
                                        {
                                            console.log("user created and added to group");
                                                        fs.readFile('./data/users.js','utf-8', function(err,data)
                                                {
                                                    if(err) throw err;
                                                    var users = JSON.parse(data);
                                                    var userlist = [];
                                                    for (var user in users)
                                                    {
                                                       if(user!="super" && creator == "super")
                                                            {
                                                                    userlist.push(user);
                                                            }
                                                    }
                                                    responsebody.userlist = userlist;
                                                    responsebody.notice = "User created and added to the group";
                                                    res.send(responsebody);


                                                        });
                                                    });
                                             }
                                            });
                                  });
                    }
                    else
                    {
                        fs.readFile('./data/groups.js','utf-8',function(err,data)
                                {
                                    if(err) 
                                    {
                                        console.log(err);
                                    }
                                    else
                                    {


                                    var groups = JSON.parse(data);
                                    
                                    responsebody.membercount =  groups[groupname].members.length;

                                    
                                                        fs.readFile('./data/users.js','utf-8', function(err,data)
                                                {
                                                    if(err) throw err;
                                                    var users = JSON.parse(data);
                                                    var userlist = [];
                                                    for (var user in users)
                                                    {
                                                       if(user!="super" && creator == "super")
                                                            {
                                                                    userlist.push(user);
                                                            }
                                                    }
                                                    responsebody.userlist = userlist;
                                                    responsebody.notice = "User already exists";
                                                    res.send(responsebody);


                                                        });
                                                    
                                            }
                                            });
                    }
                    
                        });

                  


            };
