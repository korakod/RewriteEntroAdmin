import { ArticleServicesService } from './article/article-services.service';
import { ProductService } from './services/product.service';
import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  productName;
  productNew;
  productDetail;
  articleArray = [];

 

  constructor(public productService: ProductService, public http: Http, public articleService: ArticleServicesService) {
    this.productService.getProductsList().subscribe(data => {
      this.productService.product = data;
       
    });
    this.articleArray = this.articleService.articleArray;
  }




  addNewProduct(productName, productDeatil) {
    let newProduct = { subject: productName, detail: productDeatil };
    this.productNew.push(newProduct);

  }


  addNewArticle(nameArticle, detailArticle) {
    let newArticle = { nameArticle: nameArticle, detailArticle: detailArticle, age: '', picArt: '' };
    this.articleArray.push(newArticle);
  }
}
