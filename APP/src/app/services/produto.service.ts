import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private baseUrl = "https://localhost:5001/api/produto"

  constructor(private http: HttpClient) {}

  list(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.baseUrl}/list`);
  }
}
