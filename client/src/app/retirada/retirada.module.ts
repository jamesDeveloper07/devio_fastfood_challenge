import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetiradaViewComponent } from './retirada-view/retirada-view.component';
import { SharedModule } from '../shared/shared.module';
import { RetiradaRoutingModule } from './retirada-routing.module';



@NgModule({
  declarations: [
    RetiradaViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RetiradaRoutingModule
  ]
})
export class RetiradaModule { }
