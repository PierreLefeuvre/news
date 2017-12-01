import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {

    url:string = 'https://api.pierrelefeuvre.fr';
    pwd:string = 'lestilo14';
    user:string = 'lefpierre@hotmail.fr';
    auth:string;

    constructor(){
      this.auth = btoa(this.user + ':' + this.pwd);
    }
}
