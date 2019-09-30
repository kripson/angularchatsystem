module.exports = function(dbo,app)
	
	{

    app.post('/deletechannel',async function(req,res)
  {


      requestbody = req.body;


      var channeldeletion = await new Promise((resolve,reject)=>

      {

        var query = { groupname:requestbody.groupname};
          dbo.collection("groups").find(query).toArray(function(err, result)
          {
            if (err) throw err;

            if(result.length !== 0 && result[0].channels.hasOwnProperty(requestbody.channelname))
            {
              var channels = result[0].channels;
              
              delete channels[requestbody.channelname];
              var newvalues = { $set: {channels: channels } };
              dbo.collection("groups").updateOne(query, newvalues, function(err, res) {

                      resolve({message:"Channel deleted"});

                  });
            }
            else
            {
              resolve({err:"Channel not found"});
            }
          });
      });

      
        res.send(channeldeletion);

    });
  };
