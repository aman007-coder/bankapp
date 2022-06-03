import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

// properties
aim="Perfect Banking Partner"

accno="Username Please"

acno=""
pswd=""



  constructor(private router:Router, private ds:DataService) { }


  ngOnInit(): void {
  }
  //userdefined function

  acnoChange(event:any){
    this.acno = event.target.value;
    console.log(this.acno);
  }

  pswdChange(event:any){
    this.pswd = event.target.value;
    console.log(this.pswd);
  }



  //two way
  login()
  {
    var acno = this.acno
    var pswd = this.pswd

    const result = this.ds.login(acno,pswd)

    
    if(result)
    {
     alert("login succesfull")
     this.router.navigateByUrl('dashboard')
      
    }
   
  }


  // Template Referencing Variable
  
  // login(a:any,p:any)
  // {
  //   console.log(a.value);
     
  //   var acno = a.value
  //   var pswd = p.value
  //   let db = this.db
    
  //   if(acno in db)
  //   {
  //     if(pswd == db[acno]["password"])
  //     {
  //       alert("Login Successfull")
  //     }
  //     else
  //     {
  //       alert("Incorrect Password")
  //     }
  //   }
  //   else
  //   {
  //       alert("User does not exist!!!")
  //   }
  // }



}
