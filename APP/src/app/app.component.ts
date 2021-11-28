import { FarmaciaService } from './services/farmacia.service';
import { Farmacia } from 'src/app/models/farmacia';
import { ProdutoService } from './services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './models/produto';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'home-page',
  templateUrl: "./app.component.html",
  styleUrls: []
})

export class AppComponent implements OnInit{

  produtos: Produto[] = [];

  farmacias: Farmacia[] = [];

  filter: Produto[] = []
  
  
  constructor(private service: ProdutoService, private farmaciaService: FarmaciaService){}
  
  
  ngOnInit(): void {
    this.service.list().subscribe(produtos => {
      this.produtos = produtos;
    })
    
    this.farmaciaService.list().subscribe(farmacias => {
      this.farmacias = farmacias;
    })
    
  }
  filtrando($event: any) {
    
    console.log($event)
    // if(this.produtos.includes('')){
    //   this.filter = 
    // }
    
  }
}
