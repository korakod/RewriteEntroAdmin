import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productArray=[];

  constructor(public productService:ProductService) { 
    this.productArray = this.productService.product;
    // console.log(this.productArray)

  }

  ngOnInit() {
  }

}
