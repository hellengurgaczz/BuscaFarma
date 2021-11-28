import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Farmacia } from '../models/farmacia';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {
  
  private baseUrl = "https://localhost:5001/api/farmacia"

  constructor(private http: HttpClient) {}

  create(farmacia: Farmacia) {
    return this.http.post<Farmacia>(`${this.baseUrl}/cadastrar`, farmacia)
  }

}
