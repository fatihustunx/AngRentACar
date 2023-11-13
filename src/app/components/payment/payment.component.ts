import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pay } from 'src/app/models/requests/pay';
import { ResponseModel } from 'src/app/models/responseModel';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  constructor(
    private paymentService: PaymentService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  pay: Pay  = new Pay();

  @Input() rentId: number;

  @Input() totalCost: number;

  responseModel: ResponseModel;

  Pay(pay: Pay) {
    pay.rentId = this.rentId;

    this.paymentService.Pay(pay).subscribe((response) => {
      this.responseModel = response;

      if (this.responseModel.success) {
        this.toastrService.success(
          'Pay of rent is success.',
          'Success Payment Operations'
        );
        this.router.navigate(['/rentals']);
      } else {
        this.toastrService.error(
          'Pay of rent is error.',
          'Error Payment Operations'
        );
      }
    });
  }
}
