import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private router:Router){}

  canActivate(){
    if(localStorage.getItem('auth') == 'true'){
      console.log('auth == true');
      return true;
    }
      console.log('auth == false');
      this.router.navigate(['/login']);
      return false;
  }

  public isLogged = function(){
    if(localStorage.getItem('auth') == 'true')
    return true;
  }

}
