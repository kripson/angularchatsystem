module.exports = function(dbo,app)
	
	{

    app.post('/promotetogroupadmin',async function(req,res)
  {


      requestbody = req.body;

		
      //promote if user is present
      var promotetogroupadmin = await new Promise((resolve,reject)=>

      {

        var query = { username:requestbody.username};
          dbo.collection("users").find(query).toArray(function(err, result)
          {
            if (err) throw err;

            if(result.length !== 0)
            {
              var newvalues = { $set: {ofgroupadmin: true}};
              dbo.collection("users").updateOne(query, newvalues, function(err, res) {
                        if (err) throw err;
                        resolve({message:"User promoted to group admin"});
                      });
            }
            else
            {
              resolve({err:"sorry, The user does not exist or may have been deleted"});
            }
          });




      });

      res.send(promotetogroupadmin);
  });
};