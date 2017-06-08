import { WeaponDataService } from './events/service/weapon-data.service';
import {HttpModule} from '@angular/http';
import { ProductService } from './services/product.service'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { EventsComponent } from './events/events.component';
import { ArticleComponent } from './article/article.component';
import { NewWeaponComponent } from './events/new-weapon/new-weapon.component';
import { PicArticleComponent } from './article/pic-article/pic-article.component';
import { IndexComponent } from './events/new-weapon/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EventsComponent,
    ArticleComponent,
    NewWeaponComponent,
    PicArticleComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule 

  ],

  providers: [ProductService,WeaponDataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
