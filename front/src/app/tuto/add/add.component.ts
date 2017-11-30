import { Component, OnInit } from '@angular/core';
import { Tuto } from '../tuto';
import { TutoService } from '../tuto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [TutoService]
})
export class AddComponent implements OnInit {
  news:Tuto=new Tuto();
  
  constructor(public newsService: TutoService, private location: Location) { }

  ngOnInit() {
    this.news.title = '';
    this.news.content = '';
  }

  onSubmit = function(form){
    console.log(form);
    if(form.valid){
        this.newsService.addNews(this.news).subscribe(
          result => this.location.back(),  
          error => console.log(error)
          );
    }
  }
}
