import { ArticleServicesService } from './article/article-services.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  productNew =[{subject:'' ,detail:''}];
  
  articleArray = [];
  
  constructor(public articleService: ArticleServicesService) {
    this.articleArray = this.articleService.articleArray;
  }

  addNewProduct(productName,productDeatil){
      let newProduct ={subject: productName ,detail:productDeatil};
     this.productNew.push( newProduct );

  }

  addNewArticle(nameArticle, detailArticle) {
    let newArticle = {nameArticle: nameArticle , detailArticle: detailArticle ,age :'', picArt: ''};
     this.articleArray.push( newArticle);
  }
}
