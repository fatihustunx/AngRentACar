import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { AddBrand } from '../models/requests/add-brand';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }

  apiUrl:string = 'http://localhost:35845/api/brands';

  getBrands() : Observable<ListResponseModel<Brand>> {
    var newPath = this.apiUrl + '/getall';
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  add(brand:AddBrand) : Observable<ResponseModel> {
    var newPath = this.apiUrl + '/add';
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }
}