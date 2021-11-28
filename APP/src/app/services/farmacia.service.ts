import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Farmacia } from '../models/farmacia';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {
  
  private baseUrl = "https://localhost:5001/api/farmacia"

  constructor(private http: HttpClient) {}

  create(farmacia: Farmacia): Observable<Farmacia>{
    return this.http.post<Farmacia>(`${this.baseUrl}/cadastrar`, farmacia)
  }

  list(): Observable<Farmacia[]>{
    return this.http.get<Farmacia[]>(`${this.baseUrl}/listar`);
  }

}
