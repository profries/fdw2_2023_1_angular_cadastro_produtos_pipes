import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from './produto';

@Pipe({
  name: 'filtroPesquisa'
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaProdutos: Produto[], valorPesquisado?: string): Produto[] {
    const nomePesquisado = valorPesquisado ?valorPesquisado :"";
    return listaProdutos.filter((produto) => 
      produto.nome?.toLowerCase().includes(nomePesquisado.toLowerCase()));
  }

}
