import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreFirstGuard } from './store-first.guard';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
