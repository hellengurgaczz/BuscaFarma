import { FormaProdutoService } from './../../../services/formaProduto.service';
import { FarmaciaService } from './../../../services/farmacia.service';
import { Component, OnInit } from '@angular/core';
import { Farmacia } from 'src/app/models/farmacia';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { FormaProduto } from 'src/app/models/formaProduto';


@Component({
    selector: 'app-listar-produto',
    templateUrl: './listar-produto.component.html',
    styleUrls: ['./listar-produto.component.css']

})


export class ListarProdutoComponent implements OnInit {

    produtos: Produto[] = [];
    farmacias: Farmacia[] = [];
    formasProduto: FormaProduto[] =[];

    constructor(private produtoService: ProdutoService, private farmaciaService: FarmaciaService, private formaProdutoService: FormaProdutoService) {}
    
    ngOnInit(): void {

        this.produtoService.list().subscribe((produtos) => {
            this.produtos = produtos;
        });

        this.farmaciaService.list().subscribe((farmacias) => {
            this.farmacias = farmacias;
        });

        this.formaProdutoService.list().subscribe((formasProduto) => {
            this.formasProduto = formasProduto;
        });
    }

}