import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  productNew =[{subject:'' ,detail:''}];
  articleNews =[{nameArticle:'' ,detailArticle:''}];

  addNewProduct(productName,productDeatil){
      let newProduct ={subject: productName ,detail:productDeatil};
     this.productNew.push( newProduct );

  }
  addNewArticle(articleName, articleDeatil) {
    let newArticle = {nameArticle: articleName , detailArticle: articleDeatil};
     this.articleNews.push( newArticle);
  }
}
