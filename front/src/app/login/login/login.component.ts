import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user:string='admin';
  private pwd:string='0000';

  fuser = '';
  fpwd = '';
  constructor(private router: Router) { }

  ngOnInit() {

  }

  onSubmit(myForm){
    if(this.fpwd == this.pwd && this.fuser == this.user){
      localStorage.setItem('auth', 'true');
      this.router.navigate(['/news']);
    }
    else{
      console.log(false);
    }
  }
}
