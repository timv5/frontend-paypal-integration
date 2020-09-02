export class ExecuteModel {

  paymentId: string;
  payerId: string;
  token: string;

  constructor(paymentId: string, payerId: string, token: string) {
    this.paymentId = paymentId;
    this.payerId = payerId;
    this.token = token;
  }

}
