import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductModel} from './product.model';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  public productModel: ProductModel = {
    "totalCost": 300,
    "productCost": 250,
    "shippingCost": 25,
    "tax": 25,
    "currency": "EUR",
    "productName": "Pizza",
    "userId": 1
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {}

  authorizePayment() {
    this.showSpinner();
    this.productService.authorizePayment(this.productModel)
      .subscribe((response) => {
        if (response["status"] == 'success') {
          const url = response["url"];
          window.location.href = url;
        } else {
          this.router.navigate(['error']);
        }
        this.hideSpinner();
      }, error => {
        console.log(error);
        this.hideSpinner();
      });
  }

  private showSpinner(): void {
    this.spinner.show();
  }

  private hideSpinner(): void {
    this.spinner.hide();
  }

}
