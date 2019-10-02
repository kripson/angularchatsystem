var assert = require('assert');
var app = require('./server.js');
const request = require('request');
var fs = require('fs');
var profilepicture = fs.readFileSync("./data/user.png");



describe('Server test', function() {
    var testbody = {};
    // The function passed to before() is called before running the test cases.
    before(function() {
        console.log("before test");
    });

    // The function passed to after() is called after running the test cases.
    after(function() {
        console.log(testbody);
    });


    describe('user authentication', function() {
        it('should return a user object', function(done) {
           

            var requestbody = 
            {
                "username" : "super",
                "password" : "super"

            };


            request.post('http://localhost:3000/api/auth', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.username,"super");
            console.log(body.username);
                
            done();
            });
          

        });

        it('should not return a user object', function(done) {
           

            var requestbody = 
            {
                "username" : "user"

            };


            request.post('http://localhost:3000/api/auth', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.err,"sorry, Your credentials don't match with any records");
            console.log(body);
                
            done();
            });
          

        });
    });




    describe('user creation', function() {
        it('should succeed to create a new user', function(done) {
           

            var requestbody = 
            {
                                          "username":"test",
                                          "birthdate":"12-12-12",
                                          "age":"21",
                                          "ofgroupadmin":true,
                                          "grouplist":[],
                                          "admingrouplist":[],
                                          "email":"sankit@gmail.com",
                                          "password":"123",
                                          "valid":true,
                                          "profilepicture":profilepicture

            };


            request.post('http://localhost:3000/createuser', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.message,"User created");
                
            done();
            });
          

        });

        it('should not be able to create dublicate a user', function(done) {
           

            var requestbody = 
            {
                "username":"test",
                                          "birthdate":"12-12-12",
                                          "age":"21",
                                          "ofgroupadmin":true,
                                          "grouplist":[],
                                          "admingrouplist":[],
                                          "email":"sankit@gmail.com",
                                          "password":"123",
                                          "valid":true,
                                          "profilepicture":profilepicture

            };


            request.post('http://localhost:3000/createuser', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.err,"User already exists");
            console.log(body);
                
            done();
            });
          

        });
    });


    describe('user deletion', function() {
        it('should succeed to delete a user', function(done) {
           

            var requestbody = 
            {
                                          "username":"test",

            };


            request.post('http://localhost:3000/deleteuser', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.message,"User removed");
                
            done();
            });
          

        });

        it('should not be able to delete a non-existing user', function(done) {
           

            var requestbody = 
            {
                "username":"test"
                                        

            };


            request.post('http://localhost:3000/deleteuser', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.err,"User not found");
            console.log(body);
                
            done();
            });
          

        });
    });


        describe('group creation', function() {
        it('should succeed to create a group', function(done) {
           

            var requestbody = 
            {
                                           "groupname":"test",
                                            "admins": "['super']",
                                            "asis": "['super']",
                                            "channels": "{}",
                                            "members": "['super']"

            };


            request.post('http://localhost:3000/creategroup', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.message,"Group created");
                
            done();
            });
          

        });

        it('should not be able to create a dublicate group', function(done) {
           

            var requestbody = 
            {
                "groupname":"test",
                "admins": "['super']",
                "asis": "['super']",
                "channels": "{}",
                "members": "['super']"
                                        

            };


            request.post('http://localhost:3000/creategroup', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.err,"Group already exists");
            console.log(body);
                
            done();
            });
          

        });
    });

        describe('group deletion', function() {
        it('should succeed to delete a group', function(done) {
           

            var requestbody = 
            {
                                           "groupname":"test"

            };


            request.post('http://localhost:3000/deletegroup', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.message,"Group deleted");
                
            done();
            });
          

        });

        it('should not be able to delete a non-existing group', function(done) {
           

            var requestbody = 
            {
                "groupname":"test",
               
                                        

            };


            request.post('http://localhost:3000/deletegroup', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.err,"Group not found");
            console.log(body);
                
            done();
            });
          

        });
    });

        describe('creating new group user', function() {
        it('should succeed to create a new user and add to the group', function(done) {
           

            var requestbody = 
            {
                                           
                        "username": "sankit",
                        "birthdate": "12-12-12",
                        "age": "21",
                        "ofgroupadmin": false,
                        "grouplist": ['first group'],
                        "admingrouplist": [],
                        "email": "sankit",
                        "password": "user1",
                        "valid": true,
                        "groupname":"first group",
                        "ofgroupasis":true


            };


            request.post('http://localhost:3000/createnewgroupuser', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.message,"User created and added to the group");
                
            done();
            });
          

        });

        it('should not be able to add a dublicate user to the group', function(done) {
           

             var requestbody = 
            {
                                           
                        "username": "sankit",
                        "birthdate": "12-12-12",
                        "age": "21",
                        "ofgroupadmin": false,
                        "grouplist": [],
                        "admingrouplist": [],
                        "email": "sankit",
                        "password": "user1",
                        "valid": true,
                        "groupname":"first group",
                        "ofgroupasis":true


            };


            request.post('http://localhost:3000/createnewgroupuser', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.err,"User already exists");
            console.log(body);
                
            done();
            });
          

        });
    });
    describe('removing a group user', function() {
        it('should succeed to remove a user from the group', function(done) {
           

            var requestbody = 
            {
                                           
                        "username": "sankit",
                        "groupname":"first group"


            };


            request.post('http://localhost:3000/removeuserfromgroup', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.message,"User removed from group");
                
            done();
            });
          

        });

        it('should not be able to remove a non-existing user from the group', function(done) {
           

             var requestbody = 
            {
                                           
                        "username": "sankit",
                        "groupname":"first group"
                       


            };


            request.post('http://localhost:3000/removeuserfromgroup', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.err,"Either the user or the group does not exist");
            console.log(body);
                
            done();
            });
          

        });
    });

    describe('adding an existing user to the group', function() {
        it('should succeed to add a user to the group', function(done) {
           

            var requestbody = 
            {
                                           
                        "username": "sankit",
                        "ofgroupasis":true,
                        "groupname":"first group"


            };


            request.post('http://localhost:3000/addusertogroup', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.message,"User added to the group");
                
            done();
            });
          

        });

        it('should not be able to remove a non-existing user from the group', function(done) {
           

             var requestbody = 
            {
                                           
                        "username": "sankit",
                        "groupname":"first group",
                        "ofgroupasis":true
                       


            };


            request.post('http://localhost:3000/addusertogroup', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.err,"User does not exist/ User is already a member");
            console.log(body);
                
            done();
            });
          

        });
    });
    describe('creating a channel in a group', function() {
        it('should succeed to create a channel in the group', function(done) {
           

            var requestbody = 
            {
                                           
                                        
                        "groupname": "first group",
                        "channelname":"pulchowk channel",
                        "members":["super"],
                        "admins":["super"],
                        "history":[]
                                        



            };


            request.post('http://localhost:3000/createchannel', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.message,"Channel Created");
                
            done();
            });
          

        });

        it('should not be able to create a dublicate channel in the group', function(done) {
           

             var requestbody = 
            {
                                           
                       "groupname": "first group",
                        "channelname":"pulchowk channel",
                        "members":["super"],
                        "admins":["super"],
                        "history":[]
                       


            };


            request.post('http://localhost:3000/createchannel', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.err,"Group is deleted or the channel already exists");
            console.log(body);
                
            done();
            });
          

        });
    });
     describe('add a user to the channel', function() {
        it('should succeed to add a user to the channel', function(done) {
           

            var requestbody = 
            {
                                           
                                        
                        "groupname": "first group",
                        "channelname":"pulchowk channel",
                        "username":"sankit"
                                        



            };


            request.post('http://localhost:3000/addusertochannel', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.message,"User added to the channel");
                
            done();
            });
          

        });

        it('should not be able to add an existing member to the channel', function(done) {
           

             var requestbody = 
            {
                                           
                        "groupname": "first group",
                        "channelname":"pulchowk channel",
                        "username":"sankit"
                                        
                       


            };


            request.post('http://localhost:3000/addusertochannel', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.err,"User is already a member of the channel or the channel is deleted");
            console.log(body);
                
            done();
            });
          

        });
    });
     describe('remove a user from the channel', function() {
        it('should succeed to remove a user from the channel', function(done) {
           

            var requestbody = 
            {
                                           
                                        
                        "groupname": "first group",
                        "channelname":"pulchowk channel",
                        "username":"sankit"
                                        



            };


            request.post('http://localhost:3000/removeuserfromchannel', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.message,"User removed to the channel");
                
            done();
            });
          

        });

        it('should not be able to remove a non-member from a channel', function(done) {
           

             var requestbody = 
            {
                                           
                        "groupname": "first group",
                        "channelname":"pulchowk channel",
                        "username":"sankit"
                                        
                       


            };


            request.post('http://localhost:3000/removeuserfromchannel', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.err,"User is not a member of the channel or the channel does not exist");
            console.log(body);
                
            done();
            });
          

        });
    });

     describe('deleting a channel from the group', function() {
        it('should succeed to delete a channel from the group', function(done) {
           

            var requestbody = 
            {
                                           
                                        
                        "groupname": "first group",
                        "channelname":"pulchowk channel"



            };


            request.post('http://localhost:3000/deletechannel', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.message,"Channel deleted");
                
            done();
            });
          

        });

        it('should not be able to delete a non-existing channel from the group', function(done) {
           

             var requestbody = 
            {
                                           
                      "groupname": "first group",
                    "channelname":"pulchowk channel"
                        
                       


            };


            request.post('http://localhost:3000/deletechannel', { json: requestbody }, (err, res, body) => {
            if (err) { return done(err)};
            assert.equal(body.err,"Channel not found");
            console.log(body);
                
            done();
            });
          

        });
    });
});