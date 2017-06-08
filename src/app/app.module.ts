import {HttpModule} from '@angular/http';
import { ProductService } from './services/product.service'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { EventsComponent } from './events/events.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EventsComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule 

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})

export class AppModule { }
