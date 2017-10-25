import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AboutComponent} from './about.component';
import { ProductComponent } from './products/products';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    ProductComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
