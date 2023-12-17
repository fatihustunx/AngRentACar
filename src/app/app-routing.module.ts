import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarWithImgComponent } from './components/car-with-img/car-with-img.component';
import { RentalComponent } from './components/rental/rental.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AddColorComponent } from './components/add-color/add-color.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  
  {path:"cars",component:CarComponent},
  {path:"cars/brands/:brandId",component:CarComponent},
  {path:"cars/colors/:colorId",component:CarComponent},
  {path:"cars/get/:carId",component:CarWithImgComponent},
  
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},

  {path:"rentals",component:RentalComponent},

  {path:"admin",component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }