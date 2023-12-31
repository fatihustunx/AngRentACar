import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarWithImgComponent } from './components/car-with-img/car-with-img.component';
import { FilterCarsPipe } from './pipes/filter-cars.pipe';
import { AddRentComponent } from './components/add-rent/add-rent.component';
import { SortDatesPipe } from './pipes/sort-dates.pipe';
import { PaymentComponent } from './components/payment/payment.component';
import { AddColorComponent } from './components/add-color/add-color.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    CarWithImgComponent,
    FilterCarsPipe,
    AddCarComponent,
    AddColorComponent,
    AddBrandComponent,
    AddRentComponent,
    SortDatesPipe,
    PaymentComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }