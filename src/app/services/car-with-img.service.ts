import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetResponseModel } from '../models/getResponseModel';
import { CarWithImg } from '../models/carWithImg';
import {Observable} from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarWithImgService {

  constructor(private httpClient:HttpClient) { }

  apiUrl:string = 'http://localhost:35845/api/carimages';

  getImagesByCar(carId:number) : Observable<ListResponseModel<CarWithImg>>{
    var newPath = this.apiUrl + '/getbycar?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarWithImg>>(newPath);
  }
}