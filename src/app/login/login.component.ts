import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';

interface Post {
username:string ;
birthdate:string ;
age:string;
email:string;
ofgroupadmin:boolean;
grouplist:any;
password:string; 
valid:boolean;
userlist:any;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	username = "";
	password = "";




   constructor(private router: Router,private httpClient:HttpClient){}

  ngOnInit() {
  }
 nav()
  {
    var body = {
      username : this.username,
      password : this.password

    };
    
    this.httpClient.post<Post>("http://localhost:3000/api/auth",body).subscribe(res => {  
                alert(res.username);
               if(res.valid)
              {
                if (typeof(Storage) !== "undefined")
                {
                  var temp = res;
                  delete temp.password;
                  console.log(temp.valid);
                  sessionStorage.setItem("currentUser",JSON.stringify(temp));
                }
                this.router.navigateByUrl("account");
              }
               else
              {
                alert('Failed');
              }
          });

    
  
    
    
  	
  }

  
};
