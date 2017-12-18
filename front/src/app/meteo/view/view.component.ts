import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }

  dates:Date[]= [];

  ngOnInit() {
    
    for(var i=10; i<=22; i+=3){
      var d = new Date();
      d.setUTCDate(d.getUTCDate() +1);
      d.setUTCHours(i);   
      d.setUTCMinutes(0);
      d.setUTCMinutes(0);
     // console.log(d);
      this.dates.push(d);
    }
  }

}
