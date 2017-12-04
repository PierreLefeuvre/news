import { Component, Input } from '@angular/core';
import { News } from '../news';
import { NewsService } from '../news.service';
import { AuthGuard } from '../../auth-guard.service';

@Component({
  selector: 'news-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  @Input() news: News;
  @Input() link: boolean;
  @Input() btnAdmin: boolean=true;
  @Input() commentCount: number=null;
  
     constructor(public newsService: NewsService, public authGuard:AuthGuard) {  }

    delete = function(id){
        this.newsService.deleteNews(id).subscribe(res => window.location.reload());
    }

   /* replace = function(a, b, string){
      return string.replace(/+a+/g, b);
    }
*/
    escapeRegExp = function (string){
      return string.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    }

    replace = function(term, replacement, str){
      return str.replace(new RegExp(this.escapeRegExp(term), 'g'), replacement);
    }
}
