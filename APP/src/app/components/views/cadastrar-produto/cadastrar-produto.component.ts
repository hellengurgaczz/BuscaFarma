import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
    selector: 'app-cadastrar-produto',
    templateUrl: './cadastrar-produto.component.html',
    styleUrls: ['./cadastrar-produto.component.css']

})

export class CadastrarProdutoComponent implements OnInit {

    nomeProduto!: string;
    descricaoProduto!: string;
    precoProduto!: number;
    descontoProduto!: number;
    farmaciaId!: number;
    
    constructor(private router: Router, private produtoService: ProdutoService){

    }
    ngOnInit(){} 

    cadastrarProduto(): void{
        let produto : Produto = {
            nomeProduto: this.nomeProduto,
            descricaoProduto: this.descricaoProduto,
            precoProduto: this.precoProduto,
            descontoProduto: this.descontoProduto,
            farmaciaId: this.farmaciaId
        }

        this.produtoService.create(produto).subscribe((produto) => {
            console.log(produto);
            this.router.navigate(["produto/listar"]);
        });

    }
}