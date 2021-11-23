import { ProdutoService } from './services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './models/produto';

@Component({
  selector: 'home-page',
  templateUrl: "./app.component.html",
  styleUrls: []
})

export class AppComponent implements OnInit{

  produtos: Produto[] = [];

  constructor(private service: ProdutoService){}

  ngOnInit(): void {
    this.service.list().subscribe(produtos => {
      this.produtos = produtos;
    })
  }
}
