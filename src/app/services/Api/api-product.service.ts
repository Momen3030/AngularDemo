import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiIproduct } from 'src/app/model/interfaces/api-iproduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  constructor(private _http: HttpClient) { }

  getAllProducts(): Observable<ApiIproduct[]> {
    return this._http.get<ApiIproduct[]>(`${environment.ApiUrl}/products`);
  }

  getProductByID(id): Observable<ApiIproduct> {
    return this._http.get<ApiIproduct>(`${environment.ApiUrl}/product/${id}`)
  }

  insertProduct(prd: ApiIproduct): Observable<ApiIproduct> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })
    };

    return this._http.post<ApiIproduct>(`${environment.ApiUrl}/product`, prd, httpOptions)
  }
}
