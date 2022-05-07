import { Component, OnInit } from '@angular/core';
import {user} from "../models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: user[];
  constructor() {
    this.userList = [];
  }
  ngOnInit(): void {
    debugger;
    const records = localStorage.getItem('userList');
    if (records !==  null) {
      this.userList = JSON.parse(records);
    }
  }

  delete(id:any) {
    debugger;
    const oldRecords =  localStorage.getItem('userList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.splice(userList.findIndex((a:any)=>a.userId == id),1);
      localStorage.setItem('userList', JSON.stringify(userList));
    }
    const records = localStorage.getItem('userList');
    if (records !==  null) {
      this.userList = JSON.parse(records);
    }
  }



}
