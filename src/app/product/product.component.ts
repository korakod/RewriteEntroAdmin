import { Component, OnInit ,Input} from '@angular/core';
import { Product } from "app/product/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  show = true ;
  constructor() { }

  ngOnInit() {
  }

  Show(){
    this.show = true;

  }
  Hide(){
    this.show = false;
  }

  @Input () product = Product;
 
}
