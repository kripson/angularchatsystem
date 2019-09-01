var fs = require('fs');

  module.exports = function(req,res){
         
                   
              fs.readFile('./data/groups.js','utf8',function(err,data)
            {
                if (err) throw err;
                    var groups = JSON.parse(data);
                    var groupdetail = {};

                    groupdetail.groupname = req.body.groupname;

                    // checking if the requester is an admin of the group
                    if(groups[(req.body.groupname)].admins.includes(req.body.requester))
                    {
                        groupdetail.isofadmin = true;
                    }
                    else
                    {
                        groupdetail.isofadmin = false;
                    }
                    // checking if the requester is an asis of the group
                    if(groups[req.body.groupname].admins.includes(req.body.requester))
                    {
                        groupdetail.isofasis = true;
                    }
                    else
                    {
                        groupdetail.isofasis = false;
                    }

                    // counting the num ber of members in the group and adding to the response body

                    groupdetail.membercount = groups[req.body.groupname].members.length;


                    // checking the channels the requester is part of and adding it to the repsonse
                    var requesterchannels = [];
                    for(var channel in groups[req.body.groupname].channels)
                    {
                        if(channels[channel].members.includes(req.body.requester))
                        {
                            requesterchannels.push(channel);

                        }


                    }
                    groupdetail.channels = requesterchannels;
                    res.send(groupdetail);
            });
          }




                
                                 