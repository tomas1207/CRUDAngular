import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import sampleData from './../../settings/config.json';

@Component({
  selector: 'app-gitrepos',
  templateUrl: './gitrepos.component.html',
  styleUrls: ['./gitrepos.component.scss']
})
export class GitreposComponent implements OnInit {
  gitrepos:object;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getGitRepos(username: string){
    const headers = new HttpHeaders();
    headers.set("Authorization",sampleData.git);  
    return this.http.get("https://api.github.com/users/" + username + "/repos", {headers});
  }

  showGitRepo(username: string){
    this.getGitRepos(username).subscribe(data =>{
      console.log(data);
      this.gitrepos = data;
    });
  }
}
