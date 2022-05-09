import { MessageService, ConfirmationService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/core/model';
import { PedidosService } from 'src/app/pedidos/pedidos.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-cozinha-gestao',
  templateUrl: './cozinha-gestao.component.html',
  styleUrls: ['./cozinha-gestao.component.css']
})
export class CozinhaGestaoComponent implements OnInit {
  loading: boolean = false;
  refreshPedidos: any;

  pedidosEmPreparo: Array<Pedido> = [];
  pedidosProntos: Array<Pedido> = [];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,

    private pedidosService: PedidosService,
    private errorHandlerService: ErrorHandlerService,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {

    this.atualizarPedidos();

    //remover após a implementação do websocket
    this.refreshPedidos = setInterval(() => {
      this.atualizarPedidos();
    }, 10000);

  }

  ngOnDestroy() {
    console.log('DESTROY COZINHA')
    if (this.refreshPedidos) {
      clearInterval(this.refreshPedidos);
    }
  }

  atualizarPedidos() {
    this.pesquisarPedidosEmPreparo();
    this.pesquisarPedidosProntos();
  }

  pesquisarPedidosEmPreparo() {
    this.loading = true;
    this.pedidosService.consultarPedidos('preparando')
      .then(resultado => {
        this.pedidosEmPreparo = resultado;
      })
      .catch(error => {
        this.errorHandlerService.handle(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  pesquisarPedidosProntos() {
    this.loading = true;
    this.pedidosService.consultarPedidos('pronto')
      .then(resultado => {
        this.pedidosProntos = resultado;
      })
      .catch(error => {
        this.errorHandlerService.handle(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  avancarPedido(pedido: Pedido) {
    this.loading = true;
    this.pedidosService.avancarPedido(pedido)
      .then(resultado => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: `Pedido ${resultado?.codigo} avançado com sucesso!` });
        this.atualizarPedidos();
      })
      .catch(error => {
        this.errorHandlerService.handle(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  regredirPedido(pedido: Pedido) {
    this.loading = true;
    this.pedidosService.regredirPedido(pedido)
      .then(resultado => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: `Pedido ${resultado?.codigo} regredido com sucesso!` });
        this.atualizarPedidos();
      })
      .catch(error => {
        this.errorHandlerService.handle(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  cancelarPedido(pedido: Pedido) {
    this.loading = true;
    this.pedidosService.cancelarPedido(pedido)
      .then(resultado => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: `Pedido ${resultado?.codigo} cancelado com sucesso!` });
        this.atualizarPedidos();
      })
      .catch(error => {
        this.errorHandlerService.handle(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

}
