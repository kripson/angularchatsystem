var fs = require('fs');

  module.exports = function(req,res){
         
                   
              fs.readFile('./data/groups.js','utf8',function(err,data)
            {
                if (err) throw err;
                    var groups = JSON.parse(data);
                    delete groups[req.body.groupname];
                    fs.writeFile('./data/groups.js', JSON.stringify(groups), function (err)
                    {
                        console.log("group deleted and groups file updated");

                                // removing the group from user group list
                                fs.readFile('./data/users.js','utf-8',function(err,data)
                                {
                                    if(err) 
                                    {
                                        console.log(err);
                                        fs.readFile('./data/groups.js','utf-8', function(err,data)
                                    {
                                        if(err) throw err;
                                        var groups = JSON.parse(data);
                                        var totalgrouplist = {
                                            grouplist : []
                                        };
                                        for (var group in groups)
                                        {
                                            totalgrouplist.grouplist.push(group);
                                        }
                                        console.log(totalgrouplist.grouplist)
                                        res.send(totalgrouplist);


                                            });
                                    }
                                    else
                                    {


                                    var users = JSON.parse(data);
                                    for(var user in users)
                                    {   
                                        var count = 0;
                                        for(x of users[user].grouplist)
                                        {
                                        
                                            if(x == req.body.groupname)
                                            {
                                                users[user].grouplist.splice(count,1);
                                            }
                                            count = count + 1;

                                        }
                                    }

                                     fs.writeFile('./data/users.js', JSON.stringify(users), function (err)
                                        {
                                            console.log("group deleted and users file updated");
                                          fs.readFile('./data/groups.js','utf-8', function(err,data)
                                    {
                                        if(err) throw err;
                                        var groups = JSON.parse(data);
                                        var totalgrouplist = {
                                            grouplist : []
                                        };
                                        for (var group in groups)
                                        {
                                            totalgrouplist.grouplist.push(group);
                                        }
                                        console.log(totalgrouplist.grouplist)
                                        res.send(totalgrouplist);


                                            });
                                        });
                                 }
                                });
                      });
            });

                  


            };
