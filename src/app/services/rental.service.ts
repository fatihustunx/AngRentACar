import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';
import { AddRent } from '../models/requests/add-rent';
import { GetResponseModel } from '../models/getResponseModel';
import { RentForAdd } from '../models/rentForAdd';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }

  apiUrl:string = 'http://localhost:35845/api/rentals';

  getRentals() : Observable<ListResponseModel<Rental>> {
    var newPath = this.apiUrl + '/getallrentaldtos';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  addRental(body:AddRent) : Observable<GetResponseModel<RentForAdd>>{
    var newPath = this.apiUrl + '/Add';
    return this.httpClient.post<GetResponseModel<RentForAdd>>(newPath,body);
  }
}