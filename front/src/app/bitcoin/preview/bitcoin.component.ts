import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {

  private url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  public data:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getBPI();
  }

  getBPI = function(){
      this.http.get(this.url).subscribe(
        result => { 
          
          this.data = result;
          //console.log(this.data);
        },
        error => {
          console.log(error);
          this.http.get('assets/bpi.json').subscribe(r => {
            this.data = r;
             //console.log(this.data);
          }); 
         
        }
      );
  }
}
