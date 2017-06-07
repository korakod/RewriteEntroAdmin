import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  productNew =[{subject:'' ,detail:''}];

  addNewProduct(productName,productDeatil){
      let newProduct ={subject: productName ,detail:productDeatil};
     this.productNew.push( newProduct );

  }
  
}
