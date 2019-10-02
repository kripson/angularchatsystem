import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';


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
    
    this.httpClient.post<any>("http://localhost:3000/api/auth",body).subscribe(res => {
               if(res.err)
              {
                alert('Please enter valid login details');
             
              }
               else
              {

                 if (typeof(Storage) !== "undefined")
                {
                  var temp = res;
                  delete temp.password;
                  localStorage.setItem("currentUser",JSON.stringify(temp));
                }
                this.router.navigateByUrl("account");
                
              }
          });

    
  
    
    
  	
  }

  
};
