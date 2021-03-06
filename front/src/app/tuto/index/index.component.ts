import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { TutoService } from '../tuto.service';
import { Tuto } from '../tuto';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [TutoService]
})
export class IndexComponent implements OnInit {

    loading:boolean = true;
    listNews:Tuto[] = [];
    error:any ='';
    commentCount:number=null;
    constructor(public newsService: TutoService) {  }
    
    ngOnInit() : void {
       this.getNews();
    }

    getNews = function(){
         this.newsService.getNews().subscribe(
            result => {
             result.map(res => {
                 res.listComments = [];
                 this.listNews.push(res as Tuto);
                 this.getComments(res.id);
                })
             this.loading = false;
            },
            error => { 
                this.loading = false;
                this.error = "Oups something went wrong ! ";
                console.log(error);
            });
    }
    
    getComments = function(news_id){
        this.newsService.getComments(news_id).subscribe(
        c => {
             this.listNews.find(n => n.id == news_id).listComments = c;
        },
        error => { 
            this.error(error);
        });
    }

    /*_setNews = function(data){
        for(var i = 0; i<data.length; i++){
            var news = new News(
                data[i].id, 
                data[i].title,
                data[i].content,
                data[i].created_at,
                data[i].updated_at
                );
           
            this.listNews.push(news); 
        }
    }*/
    
    delete = function(id){
        
        this.newsService.deleteNews(id).subscribe(
            result => this.listNews = this.listNews.filter(n => n.id !== id),
            error => console.log(error)
        );
    }

}