import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';
import { AFormService } from 'src/app/services/aForm.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrl: './add-brand.component.css'
})
export class AddBrandComponent implements OnInit {

  addBrandForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private brandService:BrandService,
    private toastrService:ToastrService,
    private formService:AFormService)
    {}

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm(){
      this.addBrandForm = this.formBuilder.group({
        name:["",[Validators.required,Validators.minLength(2)]]
      })
  }

  add(){
    if(this.addBrandForm.valid){
      var brand = Object.assign({},this.addBrandForm.value);
      this.brandService.add(brand).subscribe(respone=>{
        this.formService.success(respone);
      },resError=>{
        this.formService.error(resError);
      })
    }else{
      this.toastrService.error("Form is not valid!!","Error Forms");
    }
  }

}
