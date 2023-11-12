import { Component, Input } from '@angular/core';
import { AddRent } from 'src/app/models/requests/add-rent';
import { ResponseModel } from 'src/app/models/responseModel';
import { RentalService } from 'src/app/services/rental.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { GetResponseModel } from 'src/app/models/getResponseModel';
import { RentForAdd } from 'src/app/models/rentForADd';

@Component({
  selector: 'app-add-rent',
  templateUrl: './add-rent.component.html',
  styleUrls: ['./add-rent.component.css'],
})
export class AddRentComponent {
  constructor(
    private rentalService: RentalService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  addRent: AddRent = new AddRent();

  rentDay: string;
  returnDay: string;

  @Input() carId: number;

  getResponseModel: GetResponseModel<RentForAdd>;

  addRental() {
    this.addRent.carId = this.carId;
    this.addRent.customerId = 1;

    if(this.rentDay==null && this.returnDay==null){
      this.toastrService.error("Error");
      return;
    }

    this.addRent.rentDate = this.rentDay;
    this.addRent.returnDate = this.returnDay;

    this.rentalService.addRental(this.addRent).subscribe((response) => {
      this.getResponseModel = response;

      if (this.getResponseModel.success) {
        this.toastrService.success(
          'Rental is success.',
          'Success Rental Operations'
        );
        this.router.navigate(['/payofrents/pay']);
      } else {
        this.toastrService.error(
          this.getResponseModel.message,
          'Error Rental Operations'
        );
      }
    });
  }
}
