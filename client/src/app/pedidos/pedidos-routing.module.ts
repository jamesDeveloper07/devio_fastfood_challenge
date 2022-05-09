import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { PedidosCadastroComponent } from './pedidos-cadastro/pedidos-cadastro.component';




const routes: Routes = [
  {
    path: 'pedidos',
    component: PedidosCadastroComponent,
    canActivate: [AuthGuard],
    data: { permissions: ['ver_pedidos'] }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PedidosRoutingModule { }
