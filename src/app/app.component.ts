import { ProductService } from './services/product.service';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  productNew=[];

  constructor(public productService:ProductService ,public http:Http){
        this.productNew = this.productService.product;
  }

  addNewProduct(productName,productDeatil){
      let newProduct ={subject: productName ,detail:productDeatil};
     this.productNew.push( newProduct );

  }
  
}
