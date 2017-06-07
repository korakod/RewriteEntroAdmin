import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
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
