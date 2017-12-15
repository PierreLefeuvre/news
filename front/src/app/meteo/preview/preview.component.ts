import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-preview-meteo',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
  providers: [ MeteoService ]
})
export class PreviewComponent implements OnInit {

  data:any=[];
  @Input() date:Date=new Date();
  image:string;

  constructor(private http:HttpClient, private meteoService: MeteoService) { }

  ngOnInit() {
    this.getMeteo();
  }

  getMeteo = function(){
     
      this.meteoService.getMeteo().subscribe(result => {
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
        }else{
          this.image = '../../assets/img/meteo/soleil.svg';
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
