import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {

    url:string = 'https://api.pierrelefeuvre.fr'; //'http://127.0.0.1:8000';// 
    pwd:string = 'lestilo14';
    user:string = 'lefpierre@hotmail.fr';
    auth:string;

    constructor(){
      this.auth = btoa(this.user + ':' + this.pwd);
    }
}
