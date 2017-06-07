import { Component, OnInit, Input } from '@angular/core';
import { ArticleUp } from 'app/article/article-up';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
   @Input() articLe = ArticleUp;

  showMessage;
  constructor() { }

  ngOnInit() {
  }



  article1(message) {
    this.showMessage = 'ONEPIECE';
    }

  // tslint:disable-next-line:one-line
  showLog(log){
    log = 'モンキー・D・ルフィロロノア・ゾロ';
    console.log(log);
  }


}
