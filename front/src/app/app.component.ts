import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css', '../assets/css/bootstrap.min.css']
})
export class AppComponent implements OnInit{
  title = 'Tableau de bords';
  meteoDate:Date;
  
  constructor(private router:Router, private authGuard:AuthGuard){}

  ngOnInit() {
    var d = new Date();
    d.setDate(d.getDate() +1);   
    
    this.meteoDate = d;
  }

  logout = function(){
    localStorage.setItem('auth', 'false');
    this.router.navigate(['/news']);
  }
}