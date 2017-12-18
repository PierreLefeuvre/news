import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ether',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  private url = 'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=Q4F8AGZ746RHHYMIBPFR7I5JT2G7QE92B1';
  public data:any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEther();
  }

  getEther = function(){
    this.http.get(this.url).subscribe(
      result => { 
        this.data = result;
        //console.log(result); 
      }
    );
  }

}
