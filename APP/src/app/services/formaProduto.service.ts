import { FormaProduto } from '../models/formaProduto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormaProdutoService {

  formasProduto: FormaProduto[] = [];

  private baseURL = "http://localhost:5000/api/produto/forma";
  constructor(private http: HttpClient) {}

  list(): Observable<FormaProduto[]> {
    return this.http.get<FormaProduto[]>(`${this.baseURL}/listar`)
  }
  
}



