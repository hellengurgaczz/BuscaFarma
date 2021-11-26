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
    idProduto!: number;
    precoProduto!: number;
    formaProduto!: {};
    descontoProduto!: number;
    nomeFarmacia! : string;
    
    constructor(private router: Router, private service: ProdutoService){

    }
    ngOnInit(){} 

    cadastrarProduto(): void{
        let produto : Produto = {
            nomeProduto: this.nomeProduto,
            precoProduto: this.precoProduto,
            formaProduto: this.formaProduto,    
            descontoProduto: this.descontoProduto,
            nomeFarmacia: this.nomeFarmacia
        }
        this.service.create(produto).subscribe(produto => {
            console.log('Deu certo o cadastro do produto!')
            this.router.navigate(["../../produto/listar"])
        }, (error) => {
            console.log(error)
        })
    
    }
}