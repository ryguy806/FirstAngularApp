import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MediaItemComponent} from './media-items/media-item.component';
import { AppComponent } from './app.component';
import {MediaItemListComponent} from './media-item-list/media-item-list.component';
import {MediaItemFormComponent} from './media-item-form/media-item-form.component';
import {FavoriteDirective} from './directives/favorite.directive';
import {CategoryListPipe} from './category-lists/category-list.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {lookupLists, lookupListToken} from './providers/providers';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    MediaItemFormComponent,
    FavoriteDirective,
    CategoryListPipe,
  ],
  providers: [
    {provide: lookupListToken, useValue: lookupLists}
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: [
    AppComponent
  ] // What is targeted by here.
})
export class AppModule { }
