import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Tuto } from '../tuto';
import { TutoService } from '../tuto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [TutoService]
})
export class EditComponent implements OnInit {

  news:Tuto=new Tuto();
  loading:boolean= true;
  constructor(private route: ActivatedRoute, public newsService: TutoService,  private location: Location) { }

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
