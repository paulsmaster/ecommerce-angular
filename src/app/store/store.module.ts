import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from 'src/app/model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
  ],
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent],
})
export class StoreModule {}
