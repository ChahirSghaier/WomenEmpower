import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {user} from "../models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:user;
  constructor(private router:Router) {
    this.user= new user();
  }

  ngOnInit(): void {
  }
  saveUser(){
    debugger;
    this.user.createdDate=new Date();
    const oldRecords = localStorage.getItem('userList')
    if(oldRecords !== null){
      const userList =JSON.parse(oldRecords);
      userList.push(this.user);
    localStorage.setItem('userList',JSON.stringify(userList))
    }else{
      const userArr =[];
      userArr.push(this.user)
      localStorage.setItem('userList',JSON.stringify(userArr))
    }
    this.router.navigateByUrl('/userList');

  }
}
