module.exports = function(dbo,app)
	
	{

    app.post('/removeuserfromgroup',async function(req,res)
  {


      requestbody = req.body;

      //check if user is present
      var usercheck = await new Promise((resolve,reject)=>

      {

        var query = { username:requestbody.username};
          dbo.collection("users").find(query).toArray(function(err, result)
          {
            if (err) throw err;

            
            if (result.length && result[0].grouplist.includes(requestbody.groupname))
             {
                resolve(true);
             }
            else
            {
              resolve(false);
            }
          });




      });



      if(usercheck)
      {
        //checking if group exists
        var groupupdate = await new Promise((resolve,reject)=>

      {
          dbo.collection("groups").find({ groupname: requestbody.groupname }).toArray(function(err, result)
          {
            if (err) throw err;
              var group = result[0];
              query = {groupname:group.groupname};
              var channels = group.channels;
              var new_members = [];
              var new_admins = [];
              var new_asis = [];

              group.members.forEach((member,index)=>
              {
                if(member !== requestbody.username)
                {
                  new_members.push(member);
                }

              });
              group.admins.forEach((admin,index)=>
              {
                if(admin !== requestbody.username)
                {
                  new_admins.push(admin);
                }

              });
              group.asis.forEach((asis,index)=>
              {
                if(asis !== requestbody.username)
                {
                  new_asis.push(asis);
                }

              });

              for(var channel in channels)
              {
                    channels[channel].members.forEach((member,index)=>
                  {
                    if(member === requestbody.username)
                    {
                      channels[channel].members.splice(index,1);
                    }

                  });
                     channels[channel].admins.forEach((admin,index)=>
                  {
                    if(admin === requestbody.username)
                    {
                      channels[channel].admins.splice(index,1);
                    }

                  });
              }


         



              var newvalues = { $set: {members: new_members, admins: new_admins,asis:new_asis,channels:channels } };
              dbo.collection("groups").updateOne(query, newvalues, function(err, res) {
                        if (err) throw err;
                        



                        dbo.collection("users").find({ username: requestbody.username }).toArray(function(err, result)
                                      {
                                        if (err) throw err;

                                     
                                          var user = result[0];
                                          query = {username:user.username};
                                          var new_grouplist = [];
                                          var new_admingrouplist = [];

                                          user.grouplist.forEach((group,index)=>
                                          {
                                            if(group !== requestbody.groupname)
                                            {
                                              new_grouplist.push(group);
                                            }

                                          });
                                          user.admingrouplist.forEach((group,index)=>
                                          {
                                            if(group !== requestbody.groupname)
                                            {
                                              new_admingrouplist.push(group);
                                            }

                                          });


                                          var newvalues = { $set: {grouplist: new_grouplist, admingrouplist: new_admingrouplist } };
                                          dbo.collection("users").updateOne(query, newvalues, function(err, res) {
                                                    if (err) throw err;
                                                    
                                                    resolve({message:"User removed from group"});
                                                  });



                                        });
                                        
                                      });
                      });



            });
            
          }
          else
          {

            var groupupdate = {err: "Either the user or the group does not exist"};

          }

        res.send(groupupdate);
      });
};


      
