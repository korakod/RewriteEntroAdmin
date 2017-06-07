import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  productNew =[{subject:'' ,detail:''}];
  articleNews =[{articleName1:'' ,articleDetail1:''}];

  addNewProduct(productName,productDeatil){
      let newProduct ={subject: productName ,detail:productDeatil};
     this.productNew.push( newProduct );

  }
  addNewArticle(articleName, articleDeatil) {
    let newArticle = {articleName1: articleName , articleDetail1: articleDeatil};
     this.articleNews.push( newArticle);
  }
}
