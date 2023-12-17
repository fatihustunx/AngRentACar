import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AFormService } from 'src/app/services/aForm.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-add-car',

  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent implements OnInit {

  addCarForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService,
    private aFormService:AFormService)
    {}

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm(){
    this.addCarForm = this.formBuilder.group({
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      name:["",[Validators.required,Validators.minLength(2)]],
      modelYear:["",Validators.required],
      dailyPrice:["",[Validators.required,Validators.min(1)]],
      description:["",Validators.required]
    })
  }

  add(){
    if(this.addCarForm.valid){
      var car = Object.assign({},this.addCarForm.value);
      this.carService.add(car).subscribe(res=>{
        this.aFormService.success(res);
      },resError=>{
        this.aFormService.error(resError);
      })
    }else{
      this.toastrService.error("Form is not valid!!","Error Forms");
    }
  }

}
