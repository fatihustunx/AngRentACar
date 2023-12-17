import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AFormService {

  constructor(
    private toastrService:ToastrService,
  ) { }

  success(response:ResponseModel){
    this.toastrService.success(response.message,"Success");
  }

  error(resError:any){
      if(resError.error.Errors){
        for (let index = 0; index < resError.error.Errors.length; index++) {
          const element = resError.error.Errors[index];
          this.toastrService.error(element.ErrorMessage,"Val1 Error");
        }
      }else{
      if(resError.error){
        this.toastrService.error(resError.error.message,"Error");
      }
    }
  }
  
}