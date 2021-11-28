import { FarmaciaService } from './../../../services/farmacia.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Farmacia } from 'src/app/models/farmacia';

@Component({
    selector: 'app-cadastrar-farmacia',
    templateUrl: './cadastrar-farmacia.component.html',
    styleUrls: ['./cadastrar-farmacia..component.css']

})


export class CadastrarFarmaciaComponent implements OnInit {

    nomeFarmacia!: string;
    enderecoFarmacia!:string;
    telefoneFarmacia!: number;
    
    constructor(private router: Router, private service: FarmaciaService){

    }
    ngOnInit(){} 


    cadastrarFarmacia(): void {
        let farmacia: Farmacia = {
            nomeFarmacia: this.nomeFarmacia,
            enderecoFarmacia: this.enderecoFarmacia,
            telefoneFarmacia: this.telefoneFarmacia
        }

        this.service.create(farmacia).subscribe(farmacia => {
            console.log('Deu certo o cadastro da farmacia!')
            this.router.navigate(["../../produto/listar"])
        }, (error) => {
            console.log(error)
        })
    }
}
  