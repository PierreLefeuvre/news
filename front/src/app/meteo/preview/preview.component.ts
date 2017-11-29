import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-preview-meteo',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  url:string = 'http://www.infoclimat.fr/public-api/gfs/json?_ll=49.182863,-0.37067899999999554&_auth=Bx1WQQ5wAyFTfgQzBXNWf1M7AjcPeQgvUS1RMgtuVypWPV4%2FUTFWMF8xVSgAL1dhAy5UNwswVGRQO1cvDH5VNAdtVjoOZQNkUzwEYQUqVn1TfQJjDy8IL1E1UTELeFc1VjZePFEsVjVfNlUpADJXYAMvVCsLNVRpUDJXMQxoVTIHYFYwDmUDaVMjBHkFMFYzU2ECNw83CDBRNFE2C2FXZlY0XjtRM1Y3Xy5VMAA5V2QDOFQ1CzRUblA7Vy8MflVPBxdWLw4tAyNTaQQgBShWN1M%2BAjY%3D&_c=5fdfebdde184f569b3b1dfdb90980fe4';
  data:any=[];
  lieu:string = 'Caen';
  @Input() date:Date=new Date();
  image:string='../../assets/img/meteo/soleil.svg';

  constructor(private http:HttpClient) { }

  ngOnInit() {

    this.getMeteo();


  }

  getMeteo = function(){
     
      this.http.get(this.url).subscribe(result => {
          this.data = result;
          this.selectImage();
          console.log(result);
        },
        error => console.log(error)
        );
  }
  selectImage = function(){
       if(this.data[this.dateFormat(this.date)].risque_neige == 'oui'){
          this.image = '../../assets/img/meteo/neige.svg';
        }else if(this.data[this.dateFormat(this.date)].pluie > 4){
          this.image = '../../assets/img/meteo/pluie.svg';
        }else if(this.data[this.dateFormat(this.date)].nebulosite.moyenne > 60){
          this.image = '../../assets/img/meteo/nuage.svg';
        }
  }
  kelvinToCelsius = function(kelvin: number){
    return kelvin - 273.15;
  }

  dateFormat = function(date:Date, format = 'Y-m-d H:i:s'){
    var y = date.getFullYear();
    var m = ('0' + (date.getUTCMonth() + 1) ).slice(-2);
    var d = ('0' + date.getUTCDate()).slice(-2);

    if(format == 'Y-m-d H:i:s')
      return y + '-' + m +  '-' + d + ' 10:00:00'; 
    else if(format == 'd/m')
      return d + '/' + m;
  }
}
