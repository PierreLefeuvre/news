import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class GlobalsService {

    url:string;
    pwd:string = 'lestilo14';
    user:string = 'lefpierre@hotmail.fr';
    auth:string;
    env:string;

    constructor(){
      this.auth = btoa(this.user + ':' + this.pwd);
      
      if(environment.production === true){
        this.env = 'PROD';
        this.url = 'https://api.pierrelefeuvre.fr';
      }
      else{
        this.env = 'DEV';
        this.url = 'http://127.0.0.1:8000';
      }
    }
}
