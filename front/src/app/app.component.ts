import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css', '../assets/css/bootstrap.min.css']
})
export class AppComponent implements OnInit{
  title = 'News';

  meteoDate:Date;

  ngOnInit() {
    var d = new Date();
    d.setDate(d.getDate() +1);   
    
    this.meteoDate = d;
  }

}