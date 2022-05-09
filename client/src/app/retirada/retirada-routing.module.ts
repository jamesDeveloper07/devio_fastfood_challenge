import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { RetiradaViewComponent } from './retirada-view/retirada-view.component';



const routes: Routes = [
  {
    path: 'retirada',
    component: RetiradaViewComponent,
    canActivate: [AuthGuard]
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
export class RetiradaRoutingModule { }
