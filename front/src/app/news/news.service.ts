import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { News } from './news';
import { Comments } from './comments';
import { GlobalsService } from '../globals.service';

@Injectable()
export class NewsService {
    constructor(private http: HttpClient, private globals: GlobalsService) { }

    getNews(){
       const httpOptions = { 
            headers: new HttpHeaders({
                'Authorization' : 'Basic ' + this.globals.auth
            })
        };

        return this.http.get(this.globals.url + '/api/news', httpOptions);
    }
    getOneNews(id:number){
       
       const httpOptions = { 
            headers: new HttpHeaders({
                'Authorization' : 'Basic ' + this.globals.auth
            })
        };

        return this.http.get(this.globals.url + '/api/news/' +id, httpOptions);
    }
    updateNews(id:number, news: News){
        
        const httpOptions = { 
            headers: new HttpHeaders({
               // 'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8',
                'Authorization' : 'Basic ' + this.globals.auth
            })
        };

        var body = { title: news.title,
         content:  news.content};

        return this.http.put(this.globals.url + '/api/news/' + id, body, httpOptions );
    }

    deleteNews(id:number){

        const httpOptions = { 
            headers: new HttpHeaders({
                'Authorization' : 'Basic ' + this.globals.auth
            })
        };

        return this.http.delete(this.globals.url+'/api/news/'+id, httpOptions);
    }
    addNews(news: News){

        const httpOptions = { 
            headers: new HttpHeaders({
                'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8',
                'Authorization' : 'Basic ' + this.globals.auth
            })
        };
         var body = 'title='+news.title
        +'&content='+ news.content;

        return this.http.post(this.globals.url + '/api/news/', body, httpOptions );
    }

    getComments(news_id: number){
        const httpOptions = { 
            headers: new HttpHeaders({
                'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8',
                'Authorization' : 'Basic ' + this.globals.auth
            })
        };

        return this.http.get(this.globals.url + '/api/news/' + news_id + '/comments/',  httpOptions );
    }
    addComment(comment:Comments){
        const httpOptions = { 
            headers: new HttpHeaders({
                'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8',
                'Authorization' : 'Basic ' + this.globals.auth
            })
        };

       var body = 'news_id='+comment.news_id
        +'&user_id='+ comment.user_id
        +'&comment='+ comment.comment;

        return this.http.post(this.globals.url + '/api/comments/', body, httpOptions );
    }

    deleteComment(comment_id:number){
        const httpOptions = { 
            headers: new HttpHeaders({
                'Authorization' : 'Basic ' + this.globals.auth
            })
        };

        return this.http.delete(this.globals.url + '/api/comments/'+ comment_id);
    }
}
