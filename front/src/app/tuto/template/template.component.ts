import { Component, Input } from '@angular/core';
import { Tuto } from '../tuto';
import { TutoService } from '../tuto.service';


@Component({
  selector: 'tuto-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  @Input() news: Tuto;
  @Input() link: boolean;
  @Input() btnAdmin: boolean=true;
  @Input() commentCount: number=null;
  
     constructor(public newsService: TutoService) {  }

    delete = function(id){
        this.newsService.deleteNews(id).subscribe(res => window.location.reload());
    }
}
