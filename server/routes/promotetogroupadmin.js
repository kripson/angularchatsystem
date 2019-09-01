var fs = require('fs');

  module.exports = function(req,res){
         
                   
              fs.readFile('./data/users.js','utf8',function(err,data)
            {
                if (err) throw err;
                    var users = JSON.parse(data);
                    var responsebody = {};
                    users[req.body.username].ofgroupadmin = true;
                     fs.writeFile('./data/users.js', JSON.stringify(users), function (err)
                    {
                        responsebody.notice = "User promoted to group admin";
                        res.send(responsebody);

                    });


            });
            }
