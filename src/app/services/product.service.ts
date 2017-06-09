import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";

@Injectable()
export class ProductService {
  product =[];
 constructor(public http: Http) {

  }

  getProductsList() {
    let url =  "http://localhost:3001/products/product-list";
    return this.http.get(url).map(res => res.json());

  }

}
