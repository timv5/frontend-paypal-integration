import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ProductModel} from './product-page/product.model';
import {map} from 'rxjs/operators';
import {ProductUrlResponse} from './dto/product-url-response';
import {ExecuteModel} from './execute-payment/execute.model';

const BASE_URL = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class ProductService {

  constructor(private http: HttpClient, private router: Router) {
  }

  authorizePayment(product: ProductModel): any {
    return this.http.post(BASE_URL + '/authorize', product)
      .pipe(
        map((response: ProductUrlResponse<any>) => {
          return response;
        })
      );
  }

  executePayment(executePayment: ExecuteModel) {
    return this.http.post(BASE_URL + '/execute', executePayment)
      .pipe(
        map((response: ProductUrlResponse<any>) => {
          return response;
        })
      );
  }

}
