import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AboutComponent} from './about.component';
import { ProductComponent } from './products/products';
import {FormsModule} from '@angular/forms'
import { OrdersComponent } from './orders/orders';
import {ProductSerachfilter} from './products/productfilter'
import {StartRating} from './shared/starrating'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    ProductComponent,
    OrdersComponent,
    ProductSerachfilter,
    StartRating
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
