import { Component, Input, OnInit } from '@angular/core';
import { CozinhaGestaoComponent } from '../cozinha-gestao/cozinha-gestao.component';

@Component({
  selector: 'app-pedido-card',
  templateUrl: './pedido-card.component.html',
  styleUrls: ['./pedido-card.component.css'],
  styles: []
})
export class PedidoCardComponent implements OnInit {
  @Input() pedido: any

  constructor(
    public cozinhaGestaoComponent: CozinhaGestaoComponent
  ) { }

  ngOnInit(): void {
  }

  getEstiloCartao() {
    return {
      boxShadow: '0px 0px 10px 2px #b6c3c7',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      // alignItems: 'center',
      borderRadius: '10px',
      textDecoration: 'none',
      border: '3px solid white'
      // cursor: 'pointer'
    };
  }

  getAdicionais(adicionais: Array<any>) {
    let adicionaisText = 'Adicionais: ';
    if (adicionais && adicionais.length > 0) {
      for (const adicional of adicionais) {
        adicionaisText = adicionaisText + `${adicional.adicional.nome}, `
      }
      adicionaisText = adicionaisText.substring(0, adicionaisText.length - 2) + '.';
    }
    return adicionaisText;
  }

  avancarPedido(pedido: any) {
    console.log("AVANÇAR PEDIDO");
    console.log(pedido);
    this.cozinhaGestaoComponent.avancarPedido(pedido);
  }

  regredirPedido(pedido: any) {
    console.log("REGREDIR PEDIDO");
    console.log(pedido);
    this.cozinhaGestaoComponent.regredirPedido(pedido);
  }

  cancelarPedido(pedido: any) {
    console.log("CANCELAR PEDIDO");
    console.log(pedido);
    this.cozinhaGestaoComponent.cancelarPedido(pedido);
  }

  // cliqueAction(categoria: any) {
  //   if (categoria && this.cozinhaGestaoComponent.categoriaSelecionada && (categoria.id == this.cozinhaGestaoComponent.categoriaSelecionada.id)) {
  //     this.cozinhaGestaoComponent.pesquisarProdutos(undefined);
  //   } else {
  //     this.cozinhaGestaoComponent.pesquisarProdutos(categoria);
  //   }
  // }

  // isActive(categoria: any) {
  //   return categoria && this.cozinhaGestaoComponent.categoriaSelecionada && (categoria.id == this.cozinhaGestaoComponent.categoriaSelecionada.id)
  // }

}
