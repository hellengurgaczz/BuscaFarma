import { CadastrarFarmaciaComponent } from './components/views/cadastrar-farmacia/cadastrar-farmacia.component';
import { CadastrarProdutoComponent } from './components/views/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutoComponent } from './components/views/listar-produto/listar-produto.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
