import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { News } from '../news';
import { NewsService } from '../news.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [NewsService]
})
export class EditComponent implements OnInit {

  news:News=new News();
  loading:boolean= true;
  constructor(private route: ActivatedRoute, public newsService: NewsService,  private location: Location) { }

  ngOnInit() {
    this.news.id = +this.route.snapshot.params['id']; //+ convert strings to number
    
    this.getNews(this.news.id);
  }
  getNews = function(id:number){
    this.newsService.getOneNews(this.news.id).subscribe(result => {
      this.news = result;
      this.loading = false;
    },
    error => console.log(error)
    );
      
  }
  /*private _setNews(result:News){
    this.news = new News(
      result['id'],
      result['title'],
      result['content'],
      result['created_at'],
      result['updated_at']
      );
      this.loading = false;
  }*/
  onSubmit = function(form){

    if(form.valid){
     this.newsService.updateNews(this.news.id, this.news).subscribe(() => this.goBack());
    }
  }
  goBack = function(){
    this.location.back();
  }
}
