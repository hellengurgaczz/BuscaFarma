import { FormaProdutoService } from './../../../services/formaProduto.service';
import { FormaProduto } from './../../../models/formaProduto';
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
    formasProduto!: FormaProduto[];
    formaProdutoId!: number;
    
    constructor(private router: Router, private produtoService: ProdutoService, private formaProdutoService: FormaProdutoService){}

    ngOnInit(){
        this.formaProdutoService.list().subscribe((formasProduto) => {
            this.formasProduto = formasProduto;
            console.table(this.formasProduto);
        });
    } 

    cadastrarProduto(): void{
        let produto : Produto = {
            nomeProduto: this.nomeProduto,
            descricaoProduto: this.descricaoProduto,
            precoProduto: this.precoProduto,
            descontoProduto: this.descontoProduto,
            farmaciaId: this.farmaciaId,
            formaProdutoId: this.formaProdutoId
        }

        this.produtoService.create(produto).subscribe((produto) => {
            console.log(produto);
            this.router.navigate(["produto/listar"]);
        });

    }
}