import { Component, Input } from '@angular/core';
import { GetResponseModel } from 'src/app/models/getResponseModel';
import { RentForAdd } from 'src/app/models/rentForADd';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() getResponseModel:GetResponseModel<RentForAdd>;
}
