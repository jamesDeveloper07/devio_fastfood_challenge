import { ProdutoPedido } from './../../core/model';
import { Component, Input, OnInit } from '@angular/core';
import { PedidosCadastroComponent } from '../pedidos-cadastro/pedidos-cadastro.component';


@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css'],
  styles: []
})
export class ProdutoCardComponent implements OnInit {
  @Input() produto: any

  constructor(
    public pedidosCadastroComponent: PedidosCadastroComponent
  ) { }

  ngOnInit(): void {
  }

  getEstiloCartao() {
    return {
      boxShadow: '0px 0px 10px 2px #b6c3c7',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '10px',
      textDecoration: 'none',
      cursor: 'pointer'
    };
  }

  cliqueAction(produto: any) {
    //adicionar uma lógica para ao clicar
    //em um produto já adicionado antes, reabrir o produto pedido para edição
    this.pedidosCadastroComponent.isEdicaoProdutoPedido = false;
    this.pedidosCadastroComponent.pesquisarAdicionais(produto.categoria_id);

    const produtosSelecionados = this.pedidosCadastroComponent.produtosSelecionados;
    for (const pS of produtosSelecionados) {
      if (produto.id == pS.id) {
        // console.log('Já selecionado antes.')
        // console.log('Abrir pra edição')
        for (var i = 0; i < this.pedidosCadastroComponent.pedido.produtos_pedido.length; i++) {
          if (this.pedidosCadastroComponent.pedido.produtos_pedido[i].produto.id === produto.id) {
            // console.log("ProdutoPedido encontrado: ");
            const produtoPedido = this.pedidosCadastroComponent.pedido.produtos_pedido[i];
            // console.log({produtoPedido});
            this.pedidosCadastroComponent.produtoPedido = produtoPedido;
            this.pedidosCadastroComponent.displayModal = true;
            this.pedidosCadastroComponent.isEdicaoProdutoPedido = true;
            console.log("INDO PRA EDIÇÃO...");
            return;
          }
        }
        // console.log("ProdutoPedido não encontrado")
        // console.log(produto);
      }
    }

    console.log('Continuando o processo de NOVA ADIÇÂO....')
    this.pedidosCadastroComponent.produtoPedido = new ProdutoPedido();
    this.pedidosCadastroComponent.produtoPedido.produto = produto;
    this.pedidosCadastroComponent.displayModal = true;
  }

  isActive(produto: any) {
    const produtos = this.pedidosCadastroComponent.produtosSelecionados;
    for (const p of produtos) {
      if (p.id == produto.id) {
        return true
      }
    }
    return false;
  }

  getResumoDescricao(descricao: string) {
    return descricao.split(".", 1);
  }

}
