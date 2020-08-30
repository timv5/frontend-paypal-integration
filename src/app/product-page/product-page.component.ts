import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductModel} from './product.model';
import {ProductService} from './product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  private productModel: ProductModel = {
    "totalCost": 4,
    "productCost": 2,
    "shippingCost": 1,
    "tax": 1,
    "currency": "USD",
    "productName": "Pizza",
    "userId": 1
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  onSubmit() {
    this.productService.authorizePayment(this.productModel)
      .subscribe((response) => {
        if (response["status"] == 'success') {
          const url = response["url"];
          window.location.href = url;
        } else {
          this.router.navigate(['error']);
        }
      }, error => {
        console.log(error);
      });
  }

}
