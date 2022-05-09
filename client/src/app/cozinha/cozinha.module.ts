import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CozinhaRoutingModule } from './cozinha-routing.module';
import { CozinhaGestaoComponent } from './cozinha-gestao/cozinha-gestao.component';
import { PedidoCardComponent } from './pedido-card/pedido-card.component';



@NgModule({
  declarations: [
    CozinhaGestaoComponent,
    PedidoCardComponent,
  ],
  imports: [
    ButtonModule,

    CommonModule,
    SharedModule,
    CozinhaRoutingModule
  ]
})
export class CozinhaModule { }
