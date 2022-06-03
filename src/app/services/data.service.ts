import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //Database
 db:any={
   1000:{"accno":1000,"username":"lallu","password":1000,"balance":5000},
   1001:{"accno":1001,"username":"billu","password":1001,"balance":5000},
   1002:{"accno":1002,"username":"millu","password":1002,"balance":3000}
  }


  constructor() { }

  login(acno:any,pswd:any)
  {
    let db = this.db
    
    if(acno in db)
    {
      if(pswd == db[acno]["password"])
      {
        return true
      }
      else
      {
        alert("Incorrect Password")
        return false
      }
    }
    else
    {
        alert("User does not exist!!!")
        return false
    }
  }

  //register
  register(username:any,acno:any,password:any)
  {
    let db = this.db
    if(acno in db)
    {
      return false
    }
    else
    {
      //insert in db
      db[acno]={
        acno,
        username,
        password,
        "balance":0
      }
      console.log(db);
      
      return true
    }



  }

  deposit(acno:any,password:any,amt:any){

    var amount= parseInt(amt)

    let db = this.db

    if(acno in db){

      if(password == db[acno]["password"])
      {
        db[acno]["balance"]+=amount
        return db[acno]["balance"]
      }
      else
      {
        alert("Incorrect Password")
        return false
      }

    }
    else
    {
      alert("User does not exist!!!")
      return false
    }

  }


  withdraw(acno:any,password:any,amt:any){

    var amount= parseInt(amt)

    let db = this.db

    if(acno in db){

      if(password == db[acno]["password"])
      {
        if(db[acno]["balance"]>amount)
        {
          db[acno]["balance"]-=amount
          return db[acno]["balance"]
        }
        else
        {
          alert("insufficient balance")
          return false
        }
        
      }
      else
      {
        alert("Incorrect Password")
        return false
      }

    }
    else
    {
      alert("User does not exist!!!")
      return false
    }

  }













}
