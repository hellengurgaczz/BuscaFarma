import { ListarProdutoComponent } from './components/listar-produto/listar-produto.component';
import { CadastrarUsuarioComponent } from './components/cadastrar-usuario/cadastrar-usuario.component';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { CadastrarFarmaciaComponent } from './components/cadastrar-farmacia/cadastrar-farmacia.component';
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
    path: "usuario/cadastrar",
    component: CadastrarUsuarioComponent
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
