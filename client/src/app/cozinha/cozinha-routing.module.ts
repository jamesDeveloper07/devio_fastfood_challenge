import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { CozinhaGestaoComponent } from './cozinha-gestao/cozinha-gestao.component';


const routes: Routes = [
  {
    path: 'cozinha',
    component: CozinhaGestaoComponent,
    canActivate: [AuthGuard],
    data: { permissions: ['atualizar_pedidos'] }
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
export class CozinhaRoutingModule { }
