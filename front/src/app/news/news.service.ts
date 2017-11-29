import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { News } from './news';
import { Comments } from './comments';

@Injectable()
export class NewsService {
    private url = 'http://127.0.0.1:8000'
    private pwd = 'lestilo14';
    public user = 'lefpierre@hotmail.fr';
    private auth:string;

    constructor(public http: HttpClient) { 
        this.auth = btoa(this.user + ':' + this.pwd);
    }

    getNews(){
       const httpOptions = { 
            headers: new HttpHeaders({
                'Authorization' : 'Basic ' + this.auth
            })
        };

        return this.http.get(this.url + '/api/news', httpOptions);
    }
    getOneNews(id:number){
       
       const httpOptions = { 
            headers: new HttpHeaders({
                'Authorization' : 'Basic ' + this.auth
            })
        };

        return this.http.get(this.url + '/api/news/' +id, httpOptions);
    }
    updateNews(id:number, news: News){
        
        const httpOptions = { 
            headers: new HttpHeaders({
                'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8',
                'Authorization' : 'Basic ' + this.auth
            })
        };

        var body = 'title='+news.title
        +'&content='+ news.content;

        return this.http.put(this.url + '/api/news/' + id, body, httpOptions );
    }

    deleteNews(id:number){

        const httpOptions = { 
            headers: new HttpHeaders({
                'Authorization' : 'Basic ' + this.auth
            })
        };

        return this.http.delete(this.url+'/api/news/'+id, httpOptions);
    }
    addNews(news: News){

        const httpOptions = { 
            headers: new HttpHeaders({
                'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8',
                'Authorization' : 'Basic ' + this.auth
            })
        };
         var body = 'title='+news.title
        +'&content='+ news.content;

        return this.http.post(this.url + '/api/news/', body, httpOptions );
    }

    getComments(news_id: number){
        const httpOptions = { 
            headers: new HttpHeaders({
                'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8',
                'Authorization' : 'Basic ' + this.auth
            })
        };

        return this.http.get(this.url + '/api/news/' + news_id + '/comments/',  httpOptions );
    }
    addComment(comment:Comments){
        const httpOptions = { 
            headers: new HttpHeaders({
                'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8',
                'Authorization' : 'Basic ' + this.auth
            })
        };

       var body = 'news_id='+comment.news_id
        +'&user_id='+ comment.user_id
        +'&comment='+ comment.comment;

        return this.http.post(this.url + '/api/comments/', body, httpOptions );
    }

    deleteComment(comment_id:number){
        const httpOptions = { 
            headers: new HttpHeaders({
                'Authorization' : 'Basic ' + this.auth
            })
        };

        return this.http.delete(this.url + '/api/comments/'+ comment_id);
    }
}
