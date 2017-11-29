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
    
    for(var i=0; i<5; i++){
      var d = new Date();
      d.setDate(d.getDate() +i);   
      this.dates.push(d);
    }

  }

}
