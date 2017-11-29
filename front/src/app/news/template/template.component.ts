import { Component, Input } from '@angular/core';
import { News } from '../news';
import { NewsService } from '../news.service';


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
  
     constructor(public newsService: NewsService) {  }

    delete = function(id){
        this.newsService.deleteNews(id).subscribe(res => window.location.reload());
    }
}
