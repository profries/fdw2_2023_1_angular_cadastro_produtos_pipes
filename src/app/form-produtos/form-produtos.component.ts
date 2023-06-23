import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent {
  @Input() titulo = "Formulário de Produtos";
  produto = new Produto();

  constructor(private produtoService: ProdutoService) {    
  }

  cadastrar() {
    this.produtoService.inserir(this.produto);
    this.produto = new Produto();
  }
}

