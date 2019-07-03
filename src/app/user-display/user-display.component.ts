import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {
  user:Object;
  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get('https://reqres.in/api/users')
  }
  ngOnInit() {
  }
  public cenas(){
    this.getUser().subscribe(data =>{
      this.user = data;
      console.log(this.user)
    });
  }
}
