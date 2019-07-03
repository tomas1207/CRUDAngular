import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {
  user:Object;
  links = environment.urls;
  constructor(private http:HttpClient) { }
  postUser(){
    return this.http.post(this.links.baseURL + this.links.create,{  "name": "morpheus",
    "job": "leader"})
  }
  getuser(){
    return this.http.get(this.links.baseURL + this.links.create);
  }
  ngOnInit() {
  }
  public cenas(){
    this.postUser().subscribe(data =>{
      console.log(data);
    });
    this.getuser().subscribe(data=>{
      this.user = data;
      console.log(data);
    })
  }
}
