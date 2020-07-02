import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MediaItemComponent} from './media-items/media-item.component';
import { AppComponent } from './app.component';
import {MediaItemListComponent} from './media-item-list/media-item-list.component';
import {FavoriteDirective} from './directives/favorite.directive';
import {CategoryListPipe} from './category-lists/category-list.pipe';
import {lookupLists, lookupListToken} from './providers/providers';
import {HttpClientModule, HttpXhrBackend} from '@angular/common/http';
import {MockXHRBackend} from './mock-xhr-backend';
import {routing} from './routing/app.routing';
import {CategoryListComponent} from './category-lists/category-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    CategoryListComponent,
  ],
  providers: [
    {provide: lookupListToken, useValue: lookupLists},
    {provide: HttpXhrBackend, useClass: MockXHRBackend},
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
