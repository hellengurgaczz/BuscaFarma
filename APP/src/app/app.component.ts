import { FarmaciaService } from './services/farmacia.service';
import { Farmacia } from 'src/app/models/farmacia';
import { ProdutoService } from './services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './models/produto';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { FormaProduto } from './models/formaProduto';
import { FormaProdutoServiceService } from './services/forma-produto-service.service';

@Component({
  selector: 'home-page',
  templateUrl: "./app.component.html",
  styleUrls: []
})

export class AppComponent implements OnInit{

  produtos: Produto[] = [];

  farmacias: Farmacia[] = [];

  formasProduto: FormaProduto[] = [];
  
  
  constructor(private produtoService: ProdutoService, private farmaciaService: FarmaciaService, private formaProdutoService: FormaProdutoServiceService){}
  
  
  ngOnInit(): void {
    this.produtoService.list().subscribe(produtos => {
      this.produtos = produtos;
    })
    
    this.farmaciaService.list().subscribe(farmacias => {
      this.farmacias = farmacias;
    })

    this.formaProdutoService.list().subscribe(formasProduto => {
      this.formasProduto = formasProduto;
    })
    
  }
}
