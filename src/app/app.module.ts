import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { SuccessAuthorizationComponent } from './success-authorization/success-authorization.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    ProductPageComponent,
    ErrorNotFoundComponent,
    SuccessAuthorizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ErrorPageComponent ]
})
export class AppModule { }
