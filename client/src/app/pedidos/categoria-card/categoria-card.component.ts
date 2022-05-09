import { Component, Input, OnInit } from '@angular/core';
import { PedidosCadastroComponent } from '../pedidos-cadastro/pedidos-cadastro.component';

@Component({
  selector: 'app-categoria-card',
  templateUrl: './categoria-card.component.html',
  styleUrls: ['./categoria-card.component.css'],
  styles: []
})
export class CategoriaCardComponent implements OnInit {
  @Input() categoria: any

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

  cliqueAction(categoria: any) {
    if (categoria && this.pedidosCadastroComponent.categoriaSelecionada && (categoria.id == this.pedidosCadastroComponent.categoriaSelecionada.id)) {
      this.pedidosCadastroComponent.pesquisarProdutos(undefined);
    } else {
      this.pedidosCadastroComponent.pesquisarProdutos(categoria);
    }
  }

  isActive(categoria: any) {
    return categoria && this.pedidosCadastroComponent.categoriaSelecionada && (categoria.id == this.pedidosCadastroComponent.categoriaSelecionada.id)
  }

}
