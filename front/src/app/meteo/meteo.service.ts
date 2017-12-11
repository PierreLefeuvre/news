import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MeteoService {

  url:string;
  data:any=[];
  lieu:string = 'Caen';
  lat=49.182863;
  long=-0.37067899999999554;

  constructor(private http: HttpClient) {
    this.url = 'https://www.infoclimat.fr/public-api/gfs/json?_ll='+this.lat+','+this.long+'&_auth=Bx1WQQ5wAyFTfgQzBXNWf1M7AjcPeQgvUS1RMgtuVypWPV4%2FUTFWMF8xVSgAL1dhAy5UNwswVGRQO1cvDH5VNAdtVjoOZQNkUzwEYQUqVn1TfQJjDy8IL1E1UTELeFc1VjZePFEsVjVfNlUpADJXYAMvVCsLNVRpUDJXMQxoVTIHYFYwDmUDaVMjBHkFMFYzU2ECNw83CDBRNFE2C2FXZlY0XjtRM1Y3Xy5VMAA5V2QDOFQ1CzRUblA7Vy8MflVPBxdWLw4tAyNTaQQgBShWN1M%2BAjY%3D&_c=5fdfebdde184f569b3b1dfdb90980fe4';
   }


  public getMeteo = function(){
    return this.http.get(this.url);
  }
}
