import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { NewsService } from '../news.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [NewsService]
})
export class AddComponent implements OnInit {
  news:News=new News();
  
  constructor(public newsService: NewsService, private location: Location) { }

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
