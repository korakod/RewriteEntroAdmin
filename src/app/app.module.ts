import { ArticleServicesService } from './article/article-services.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { EventsComponent } from './events/events.component';
import { ArticleComponent } from './article/article.component';
import { NewWeaponComponent } from './events/new-weapon/new-weapon.component';
import { PicArticleComponent } from './article/pic-article/pic-article.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EventsComponent,
    ArticleComponent,
    NewWeaponComponent,
    PicArticleComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ArticleServicesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
