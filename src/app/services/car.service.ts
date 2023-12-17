import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarWithImg } from '../models/carWithImg';
import { GetResponseModel } from '../models/getResponseModel';
import { ResponseModel } from '../models/responseModel';
import { AddCar } from '../models/requests/add-car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private httpClient: HttpClient) {}

  apiUrl: string = 'http://localhost:35845/api/cars';

  getCars(): Observable<ListResponseModel<Car>> {
    var newPath = this.apiUrl + '/getallcardtos';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    var newPath = this.apiUrl + '/getbybrand?id=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColors(colorId: number): Observable<ListResponseModel<Car>> {
    var newPath = this.apiUrl + '/getbycolor?id=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails(carId: number): Observable<GetResponseModel<Car>> {
    var newPath = this.apiUrl + '/getcardetails?id=' + carId;
    return this.httpClient.get<GetResponseModel<Car>>(newPath);
  }

  getCarsByFilter(
    brandId: number,
    colorId: number
  ): Observable<ListResponseModel<Car>> {
    var newPath =
      this.apiUrl + '/getbyfilter?brandId=' + brandId + '&colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  add(car:AddCar) : Observable<ResponseModel> {
    var newPath = this.apiUrl + '/add';
    return this.httpClient.post<ResponseModel>(newPath,car);
  }
  
}