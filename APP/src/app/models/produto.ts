import { Farmacia } from './farmacia';
import { FormaProduto } from './formaProduto';
export interface Produto {

    id?: number;
    nomeProduto: string;
    descricaoProduto: string;
    precoProduto: number;
    descontoProduto: number;
    farmacia?: Farmacia;
    farmaciaId: number;
    formaProdutoId?: number;
    formaProduto?: FormaProduto;

}
