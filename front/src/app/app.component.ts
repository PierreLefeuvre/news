import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css', '../assets/css/bootstrap.min.css']
})
export class AppComponent implements OnInit{
  title = 'Tableau de bords';
  meteoDate:Date;
  
  constructor(private router:Router, public authGuard:AuthGuard, private titleService: Title){}

  ngOnInit() {
    var d = new Date();
    d.setDate(d.getDate() +1);   
    
    this.meteoDate = d;

    this.setTitle(this.title);
  }

  logout = function(){
    localStorage.setItem('auth', 'false');
    this.router.navigate(['/news']);
  }

  public setTitle( newTitle: string ){
    this.titleService.setTitle(newTitle);
  }
}