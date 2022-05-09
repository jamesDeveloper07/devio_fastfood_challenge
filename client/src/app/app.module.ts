import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { PedidosModule } from './pedidos/pedidos.module';

import { PageNotFoundComponent } from './core/page-not-found.component';
import { CozinhaModule } from './cozinha/cozinha.module';
import { RetiradaModule } from './retirada/retirada.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  { path: '', redirectTo: 'lancamentos', pathMatch: 'full' },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

    CoreModule,
    SegurancaModule,
    PedidosModule,
    CozinhaModule,
    RetiradaModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  exports: [
    HttpClientModule,
    CoreModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
