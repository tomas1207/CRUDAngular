import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.scss']
})
export class TempoComponent implements OnInit {
  tempo:Object;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  getTempoFromIPMA(localidade : Number){
    let url = "http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/" + localidade.toString() + ".json";
    this.http.get(url).subscribe(data=>{
      console.log(data);
      this.tempo = data;
    });
    return this.tempo;
  }

  checkRain(rain){
    let cenas = Number(rain) / 100
    let css = {
      "background": "rgba(0,0,255,"+ cenas +")"
    }
    return css; 
  }
  checkSun(sun){
    let cenas = Number(sun) / 150
    
    let css = {
      "background": "rgba(255,0,0,"+ cenas +")"
    }
    return css; 
  }
  
}
