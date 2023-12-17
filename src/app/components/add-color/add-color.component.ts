import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ColorService } from 'src/app/services/color.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrl: './add-color.component.css'
})
export class AddColorComponent implements OnInit {

  addColorForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private colorService:ColorService,
    private toastrService:ToastrService){}

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm(){
    this.addColorForm = this.formBuilder.group({
      name:["",[Validators.required,Validators.minLength(2)]] 
    });
  }

  add(){
    if(this.addColorForm.valid){
      var color = Object.assign({},this.addColorForm.value);
      this.colorService.add(color).subscribe(response=>{
        this.toastrService.success(response.message,"Success");
      },responseError=>{
        if(responseError.error.Errors){
          for (let index = 0; index < responseError.error.Errors.length; index++) {
            const element = responseError.error.Errors[index];
            this.toastrService.error(element.ErrorMessage,"Val1 Error");
          }
        }else{
          this.toastrService.error(responseError.error.message,"Error");
        }
      })
    }else{
      this.toastrService.error("Form is not valid!!","Error Forms");
    }
  }
}