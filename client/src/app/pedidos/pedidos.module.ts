
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';

import { CategoriaCardComponent } from './categoria-card/categoria-card.component';
import { ProdutoCardComponent } from './produto-card/produto-card.component';

import { SharedModule } from '../shared/shared.module';
import { PedidosRoutingModule } from './pedidos-routing.module';
import { DialogModule } from 'primeng/dialog';
import { PedidosCadastroComponent } from './pedidos-cadastro/pedidos-cadastro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    CategoriaCardComponent,
    ProdutoCardComponent,
    PedidosCadastroComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    CalendarModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    MessageModule,
    DialogModule,
    CheckboxModule,
    FontAwesomeModule,

    SharedModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
