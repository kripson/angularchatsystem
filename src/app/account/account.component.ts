import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';

interface Users {
userlist:any
};

interface Groups {
grouplist:any;
admingrouplist:any;
};

interface Group {
groupname:string,
isofadmin:boolean;
isofasis:boolean;
membercount:number;
channels:any;
};


interface Member
{
	membercount:number;
	userlist:any;
	notice:string;
}



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

	createnewgroupuser = false;
	addnewgroupuser = false;

	username = "";
	birthdate = "";
	age = "";
	email = "";
  ofgroupadmin = false;
  admingrouplist = [];
	grouplist=[];
	userlist= [];



	nusername = "";
    nbirthdate="";
    nage="";
    nemail="";
    npassword="";
    nofgroupadmin:any="";
    ngrouplist=[];
    nadmingrouplist=[];
    nvalid=true;


    detailedgroup={
    groupname:"",
    isofadmin:false,
    isofasis:false,
    membercount: 0,
    channels: []
    };


	ngroupusername = "";
    ngroupbirthdate="";
    ngroupage="";
    ngroupemail="";
    ngrouppassword="";
    nofgroupasis:any="";
    nmembergrouplist=[];
    ngroupvalid=true;

    groupusername = "";
    ofgroupasis:any = "";



    ngroupname = "";





    


  constructor(private router: Router,private httpClient:HttpClient) { }

  ngOnInit() {
  				if (typeof(Storage) !== "undefined")
  					{


				                try
				                	{
				                		var userdetails = JSON.parse(sessionStorage.getItem("currentUser"));
				                		alert(JSON.stringify(userdetails));
				                		this.userlist = userdetails.userlist;
					                	this.username = userdetails.username;
					                	this.birthdate = userdetails.birthdate;
                            this.ofgroupadmin = userdetails.ofgroupadmin;
                            this.admingrouplist = userdetails.admingrouplist;
					                	this.age = userdetails.age;
					                	this.email = userdetails.email;
					                	this.grouplist = userdetails.grouplist;


				                	}
				                	catch(error)
				                	{
				                		alert("Please Login First");
				                		this.router.navigateByUrl('login');
				                	}
				    }
 			 }


 	turn(num)
 	{
 		if (num == 1)
 		{
 			this.createnewgroupuser = true;
 			this.addnewgroupuser = false;
 		}
 		else
 		{
 			this.addnewgroupuser = true;
 			this.createnewgroupuser = false;
 		}
 	}

  logout()
  {
  		sessionStorage.clear();
  		this.router.navigateByUrl('login');
  }

  createNewUser()
  {
    if(this.nofgroupadmin != "" && this.nusername != "" && this.nage != "" && this.nbirthdate != ""  && this.nemail != "" && this.npassword != "")
    {

  
  		if (this.nofgroupadmin == "true")
  		{
  			this.nofgroupadmin = true;
  		}
  		else
  		{
  			this.nofgroupadmin = false;
  		}
  		var nuser = {
  				username:this.nusername,
               	birthdate:this.nbirthdate,
                age:this.nage,
                email:this.nemail,
                ofgroupadmin:this.nofgroupadmin,
                admingrouplist:[],
                grouplist:[],
                password:this.npassword,
                valid:this.nvalid
  		}

  		this.httpClient.post<Users>("http://localhost:3000/createuser",nuser).subscribe(res => {
                
          
                if (typeof(Storage) !== "undefined")
                {
                  var temp = JSON.parse(sessionStorage.getItem("currentUser"));
                  temp.userlist = res.userlist;
                  alert(res.userlist);
                  sessionStorage.setItem("currentUser",JSON.stringify(temp));
                  this.userlist = res.userlist;
                  alert((sessionStorage.getItem("currentUser")));
                }
              
               else
              {
                alert('Cannot Create User');
              }
          });
        }
        else
        {
          alert("Please fill out the form completely")
        }

  }

  createNewGroup()
  {

    if(this.ngroupname != "")
    {

    
  		
  		var ngroup = {
  				groupname:this.ngroupname,
  				creator:this.username,
               	admins: ['super',this.username],
               	asis:['super',this.username],
               	channels:{},
               	members:['super',this.username]
  		};

  		if (this.username == 'super')
  		{
  			ngroup.admins.pop();
  			ngroup.members.pop();
  			ngroup.asis.pop();
  		}

  		this.httpClient.post<Groups>("http://localhost:3000/creategroup",ngroup).subscribe(res => { 
                
          
                if (typeof(Storage) !== "undefined")
                {
                  var temp = JSON.parse(sessionStorage.getItem("currentUser"));
                  temp.grouplist = res.grouplist;
                  temp.admingrouplist = res.admingrouplist;
                  alert(res.grouplist);
                  sessionStorage.setItem("currentUser",JSON.stringify(temp));
                  this.grouplist = res.grouplist;
                  this.admingrouplist = res.admingrouplist;
                  alert((sessionStorage.getItem("currentUser")));
                }
               else
              {
                alert('Cannot Create Group');
              }
          });
      }
      else
      {
        alert("Please enter a group name");
      }

  }

  deleteUser(user)
  {
  	var deluser = {
  	username:user
  	}
  	this.httpClient.post<Users>("http://localhost:3000/deleteuser",deluser).subscribe(res => {  
                
          
                if (typeof(Storage) !== "undefined")
                {
                  var temp = JSON.parse(sessionStorage.getItem("currentUser"));
                  temp.userlist = res.userlist;
                  alert(res.userlist);
                  sessionStorage.setItem("currentUser",JSON.stringify(temp));
                  this.userlist = res.userlist;
                  alert((sessionStorage.getItem("currentUser")));
                }
              
               else
              {
                alert('Cannot Delete User');
              }
              if(this.detailedgroup.groupname)
              {


              this.groupDetail(this.detailedgroup.groupname);
              }
          });

  }
   deleteGroup(group)
  {

  	if(group == this.detailedgroup.groupname)
  	{
  		this.detailedgroup ={
				    groupname:"",
				    isofadmin:false,
				    isofasis:false,
				    membercount: 0,
				    channels: []
				    };
  	}
  	var delgroup = {
    groupname:group,
    deletor:this.username
  	}
  	this.httpClient.post<Groups>("http://localhost:3000/deletegroup",delgroup).subscribe(res => {  
                
          
                if (typeof(Storage) !== "undefined")
                {
                  var temp = JSON.parse(sessionStorage.getItem("currentUser"));
                  temp.grouplist = res.grouplist;
                  alert(res.grouplist);
                  sessionStorage.setItem("currentUser",JSON.stringify(temp));
                  this.grouplist = res.grouplist;
                  alert((sessionStorage.getItem("currentUser")));
                }
              
               else
              {
                alert('Cannot Delete User');
              }
          });

  }
  removegroupdetails()
  {
  		this.detailedgroup={
			    groupname:"",
			    isofadmin:false,
			    isofasis:false,
			    membercount: 0,
			    channels: []
			    };
  }

  groupDetail(group)
  {
  


  	var getgroup = {
  	requester: this.username,
  	groupname: group
  	}
  	this.httpClient.post<Group>("http://localhost:3000/getgroupdetail",getgroup).subscribe(res => {  
  	 if (typeof(Storage) !== "undefined")
                {
                  this.detailedgroup.groupname = res.groupname;
                  this.detailedgroup.isofadmin = res.isofadmin;
                  this.detailedgroup.isofasis = res.isofasis;
                  this.detailedgroup.isofadmin = res.isofadmin;
                  this.detailedgroup.membercount = res.membercount;
                  console.log(this.detailedgroup);
               
                }
              
               else
              {
                alert('Cannot get Group Detail');
              }
  });


}

addNewUserToGroup()
{
  if(this.ngroupusername != "" && this.nofgroupasis != "" && this.ngroupage != "" && this.ngroupbirthdate != ""  && this.ngroupemail != "" && this.ngrouppassword != "")
  {

  
	if (this.nofgroupasis == "true")
  		{
  			this.nofgroupasis = true;
  		}
  		else
  		{
  			this.nofgroupasis = false;
  		}
	var newuserdetail = 
	{
				username:this.ngroupusername,
               	birthdate:this.ngroupbirthdate,
                age:this.ngroupage,
                email:this.ngroupemail,
                ofgroupadmin:false,
                ofgroupasis:this.nofgroupasis,
                grouplist: [this.detailedgroup.groupname],
                password:this.ngrouppassword,
                valid:this.ngroupvalid,
                groupname:this.detailedgroup.groupname,
                creator:this.username
	}

	this.httpClient.post<Member>("http://localhost:3000/createnewgroupuser",newuserdetail).subscribe(res => {  
                
          
                if (typeof(Storage) !== "undefined")
                {
                  var temp = JSON.parse(sessionStorage.getItem("currentUser"));
                  temp.userlist = res.userlist;
                  sessionStorage.setItem("currentUser",JSON.stringify(temp));
                  this.detailedgroup.membercount = res.membercount;
                  this.userlist = res.userlist;
                }
              
               else
              {
                alert('Cannot Create User');
              }
              this.createnewgroupuser = false;
              this.addnewgroupuser = false;
          });     
        }
        else
        {
          alert("Please fill out the form completely");
        }             


}

addExistingUserToGroup()
{
  if(this.groupusername != "" && this.ofgroupasis != "")
  {
	if (this.ofgroupasis == "true")
  		{
  			this.ofgroupasis = true;
  		}
  		else
  		{
  			this.ofgroupasis = false;
  		}
	var newuserdetail = 
	{
				username:this.groupusername,
                ofgroupasis:this.ofgroupasis,
                groupname:this.detailedgroup.groupname,
                creator:this.username
	}

	this.httpClient.post<Member>("http://localhost:3000/addusertogroup",newuserdetail).subscribe(res => {  
                
          
                if (typeof(Storage) !== "undefined")
                {
                  this.detailedgroup.membercount = res.membercount;
                  this.userlist = res.userlist;
                  alert(res.notice);
                }
              
               else
              {
                alert('Cannot add User to group');
              }
              this.createnewgroupuser = false;
              this.addnewgroupuser = false;
          }); 
        }
        else
        {
          alert("Please fill out the form properly");
        }                 


}

promoteToGroupAdmin(username)
{
  if(!this.ofgroupadmin)
  {
    var promoteduser = {
      username:username
      
    }
    this.httpClient.post<any>("http://localhost:3000/promotetogroupadmin",promoteduser).subscribe(res => {  
                    
              
                    
                      alert(res.notice);
                    
                  
              });                  
  }
  else
  {
    alert("Already a group admin");
  }

}
}
