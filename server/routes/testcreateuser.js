module.exports = function(dbo,app)
	
	{

     var fs = require('fs');

    var profilepicture = fs.readFileSync("./data/user.png");

    app.post('/createuser',async function(req,res)
  {


      requestbody = req.body;

      //check if user is present
      var usercheck = await new Promise((resolve,reject)=>

      {

        var query = { username:requestbody.username};
          dbo.collection("users").find(query).toArray(function(err, result)
          {
            if (err) throw err;

            if(result.length !== 0)
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
      var usercreate = {err:"User already exists"};
    }
    else
    {
      var usercreate = await new Promise((resolve,reject)=>
      {
        var newuser = {
                                          username:requestbody.username,
                                          birthdate:requestbody.birthdate,
                                          age:requestbody.age,
                                          ofgroupadmin:requestbody.ofgroupadmin,
                                          grouplist:requestbody.grouplist,
                                          admingrouplist:requestbody.admingrouplist,
                                          email:requestbody.email,
                                          password:requestbody.password,
                                          valid:requestbody.valid,
                                          profilepicture:profilepicture
                        };
            dbo.collection("users").insertOne(newuser, function(err, result) {
            if (err) throw err;
            resolve({message:"User created"});

            });
          });
    };
  
    res.send(usercreate);
  });
};





