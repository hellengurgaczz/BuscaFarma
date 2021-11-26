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

  create(produto: Produto) : Observable<Produto>{
    return this.http.post<Produto>(`${this.baseUrl}/criar`, produto)
  } 

  list(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.baseUrl}/listar`);
  }
}
