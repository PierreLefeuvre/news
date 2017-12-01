import { Component, Input } from '@angular/core';
import { Tuto } from '../tuto';
import { TutoService } from '../tuto.service';
import { AuthGuard } from '../../auth-guard.service';

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
  
     constructor(private newsService: TutoService,  public authGuard: AuthGuard) {  }

    delete = function(id){
        this.newsService.deleteNews(id).subscribe(res => window.location.reload());
    }

    replace = function(a, b, string){
      return string.split(a).join(b);
    }
}
