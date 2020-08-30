import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductPageComponent} from './product-page/product-page.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ErrorNotFoundComponent} from './error-not-found/error-not-found.component';
import {SuccessAuthorizationComponent} from './success-authorization/success-authorization.component';


const routes: Routes = [
  { path: '', component: ProductPageComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: 'success', component: SuccessAuthorizationComponent },
  { path: '**', component: ErrorNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
