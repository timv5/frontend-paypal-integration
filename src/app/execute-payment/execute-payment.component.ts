import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ExecuteModel} from './execute.model';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-execute-payment',
  templateUrl: './execute-payment.component.html',
  styleUrls: ['./execute-payment.component.css']
})
export class ExecutePaymentComponent implements OnInit {

  paymentId: string;
  payerId: string;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.showSpinner();
    this.route.queryParamMap.subscribe((queryParam) => {
      if (queryParam.has('paymentId') && queryParam.has('PayerID') && queryParam.has('token')) {
        const executeModel = new ExecuteModel(queryParam.get('paymentId'), queryParam.get('PayerID'), queryParam.get('token'));
        this.executePayment(executeModel);
      } else {
        this.router.navigate(['error']);
      }
    });
  }

  private executePayment(executeModel: ExecuteModel) {
    this.productService.executePayment(executeModel)
      .subscribe((response) => {
        if (response["status"] == 'success') {
          const url = response["url"];
          this.router.navigate(['success']);
        } else {
          console.log(response);
          this.router.navigate(['error']);
        }
        this.hideSpinner();
      }, error => {
        console.log(error);
        this.router.navigate(['error']);
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
