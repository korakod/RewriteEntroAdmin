import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { EventsComponent } from './events/events.component';
import { ArticleComponent } from './article/article.component';
import { ArticleNewComponent } from './article/article-new/article-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EventsComponent,
    ArticleComponent,
    ArticleNewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
