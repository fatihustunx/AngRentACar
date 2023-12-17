import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';
import { AddColor } from '../models/requests/add-color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }

  apiUrl:string = 'http://localhost:35845/api/colors';

  getColors() : Observable<ListResponseModel<Color>>{
    var newPath = this.apiUrl + '/getall';
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  add(color:AddColor) : Observable<ResponseModel> {
    var newPath = this.apiUrl + '/add';
    return this.httpClient.post<ResponseModel>(newPath,color);
  }
}