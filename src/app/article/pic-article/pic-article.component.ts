import { ArticleServicesService } from './../article-services.service';
import { ArticleUp } from './../article-up';
import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-pic-article',
  templateUrl: './pic-article.component.html',
  styleUrls: ['./pic-article.component.css']
})
export class PicArticleComponent implements OnInit {
  articleArray = [];

  constructor(public articleService: ArticleServicesService) {
    this.articleArray = this.articleService.articleArray;
  }

  ngOnInit() {
  }

}
