import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { TutoService } from '../tuto.service';
import { Tuto } from '../tuto';
import { Comments } from '../../news/comments';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [TutoService]
})
export class ViewComponent implements OnInit {

    user_id = 1;
    news:Tuto=new Tuto();
    errors:any;
    loading:boolean= true;
    comment:Comments= new Comments();

    constructor(public newsService: TutoService, private route: ActivatedRoute) {  }
    
    ngOnInit() : void {
        var id = +this.route.snapshot.params['id']; //+ convert strings to number
        this.getNews(id);
    }

    addComment = function(form){
        if(form.valid){
            
            this.comment.news_id = this.news.id;
            this.comment.user_id = this.user_id;

            this.newsService.addComment(this.comment).subscribe(
                result => window.location.reload(),
                error => console.log(error)
                );

            /*this.news.listComments.push(new Comments(this.comment.id,
                this.comment.news_id,
                this.comment.user_id,
                this.comment.comment,
                new Date(),
                new Date()
            ));

            form.reset();
            */
        }
    }

    getNews = function(id:number){
        this.newsService.getOneNews(id).subscribe(
            result => { 
                result.listComments = []; 
                this.news = result;                
                this.loading = false; 
                this.getComments(result.id);
            });
    }

    getComments = function(news_id){
        this.newsService.getComments(news_id).subscribe(
        c => this.news.listComments = c,
        error => { 
            this.error(error);
        });
    }
  /* _setNews(result:News){
    this.news = new News(
        result['id'],
        result['title'],
        result['content'],
        result['created_at'],
        result['updated_at']
    );
    this.loading = false;
    this.getComments(result['id']);
  } */
   /* _parseComments = function(result){
        var tab:Comments[] = [];
        for(var i = 0; i<result.length; i++){
            var c = new Comments(
            result[i].id,
            result[i].news_id,
            result[i].user_id,
            result[i].comment,
            result[i].created_at,
            result[i].updated_at,
            result[i].name
            );
            tab.push(c);
        }
        return tab;
    } */

    delete = function(id){
        this.listNews = this.listNews.filter(n => n.id !== id);
        this.newsService.deleteNews(id).subscribe();
    }

    error = function(error){
        this.errors = error;
        console.log(this.errors);
    }
}