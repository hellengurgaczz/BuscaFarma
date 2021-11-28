import { CadastrarFarmaciaComponent } from './components/views/cadastrar-farmacia/cadastrar-farmacia.component';
import { CadastrarProdutoComponent } from './components/views/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutoComponent } from './components/views/listar-produto/listar-produto.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
  {
    path: "",
    component: ListarProdutoComponent
  },
  {
    path: "farmacia/cadastrar",
    component: CadastrarFarmaciaComponent
  },
  {
    path: "produto/cadastrar",
    component: CadastrarProdutoComponent
  },
  {
    path: "produto/listar",
    component: ListarProdutoComponent
  },
  {
    path: "produto/deletar/{id}",
    component: ListarProdutoComponent
  },
  {
    path: "produto/buscarProduto/{nome}",
    component: ListarProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
