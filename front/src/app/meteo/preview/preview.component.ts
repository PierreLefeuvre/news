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
  error:string ='';
  constructor(private http:HttpClient, private meteoService: MeteoService) { }

  ngOnInit() {
    this.getMeteo();
  }

  getMeteo = function(){
     
      this.meteoService.getMeteo().subscribe(result => {
          this.data = result;
          this.selectImage();
          //console.log(result);
        },
        error => {/*console.log(error);*/ this.error = 'Web service meteo indisponible.';}
        );
  }
  selectImage = function(){    
  
        var d = this.dateFormat(this.date);
        //console.log('date: ' + d);

        if(!this.data.hasOwnProperty(d)){
         this.error = 'Meteo du ' + d + ' non disponible';
          return false;
        }

        if(this.data[d].risque_neige == 'oui'){
          this.image = '../../assets/img/meteo/neige.svg';
        }else if(this.data[d].pluie > 4){
          this.image = '../../assets/img/meteo/pluie.svg';
        }else if(this.data[d].nebulosite.moyenne > 60){
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
    var h = ('0' + date.getUTCHours()).slice(-2);

    if(format == 'Y-m-d H:i:s')
      return y + '-' + m +  '-' + d + ' ' + h + ':00:00'; 
    else if(format == 'd/m')
      return d + '/' + m;
    else if(format == 'd/m H:i')
      return d + '/' + m + ' ' + h + ':00';
  }
}
