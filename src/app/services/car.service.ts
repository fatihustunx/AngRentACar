import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarWithImg } from '../models/carWithImg';
import { GetResponseModel } from '../models/getResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  apiUrl:string = 'http://localhost:35845/api/cars';

  getCars() : Observable<ListResponseModel<Car>> {
    var newPath = this.apiUrl + "/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number) : Observable<ListResponseModel<Car>>{
    var newPath = this.apiUrl + "/getbybrand?id=" + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColors(colorId:number) : Observable<ListResponseModel<Car>>{
    var newPath = this.apiUrl + "/getbycolor?id=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails(carId:number) : Observable<GetResponseModel<Car>>{
    var newPath = this.apiUrl + '/getcardetails?id=' + carId;
    return this.httpClient.get<GetResponseModel<Car>>(newPath);
  }
}