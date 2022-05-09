import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MenubarModule } from 'primeng/menubar';


import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { AuthService } from './../seguranca/auth.service';
import { SegurancaService } from './../seguranca/seguranca.service';
import { PageNotFoundComponent } from './page-not-found.component';

registerLocaleData(ptBr, 'pt-BR');

@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule,
    MenubarModule,

    ToastModule,
    ConfirmDialogModule,
    DialogModule
  ],
  exports: [
    SidebarModule,
    RouterModule,
    MenubarModule,

    ToastModule,
    ConfirmDialogModule,
    DialogModule,

    NavbarComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    DatePipe,
    MessageService,
    ConfirmationService,
    Title,
    JwtHelperService,

    NavbarComponent,
    ErrorHandlerService,
    AuthService,
    SegurancaService
  ]
})
export class CoreModule { }
