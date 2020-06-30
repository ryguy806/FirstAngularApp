import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MediaItemComponent} from './media-items/media-item.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ] // What is targeted by here.
})
export class AppModule { }
