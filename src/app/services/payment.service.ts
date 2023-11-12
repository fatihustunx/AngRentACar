import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pay } from '../models/requests/pay';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient:HttpClient) { }

  apiUrl:string = 'http://localhost:35845/api/payofrents';

  Pay(pay:Pay) : Observable<ResponseModel>{
    var newPath = this.apiUrl + '/pay';
    return this.httpClient.post<ResponseModel>(newPath,pay);
  }
}