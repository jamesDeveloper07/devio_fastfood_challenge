import { MessageService, ConfirmationService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/core/model';
import { PedidosService } from 'src/app/pedidos/pedidos.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-retirada-view',
  templateUrl: './retirada-view.component.html',
  styleUrls: ['./retirada-view.component.css']
})
export class RetiradaViewComponent implements OnInit {
  loading: boolean = false;

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

}
