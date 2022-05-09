import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { NotAuthenticatedError } from './../seguranca/money-http-interceptor';
import { AuthService } from '../seguranca/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    public authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;
    } else {
      if (errorResponse instanceof NotAuthenticatedError) {
        msg = 'Sua sessão expirou!';
        this.voltarProLogin('ErrorHandler (SESSÃO EXPIRADA)')
      } else {
        if (errorResponse instanceof HttpErrorResponse && errorResponse.status >= 400 && errorResponse.status <= 499) {

          try {
            msg = errorResponse.error[0].mensagemUsuario;
          } catch (error) {
            msg = 'Ocorreu um erro ao processar a sua solicitação';
            if (errorResponse.status == 403) {
              msg = 'Você não tem permissão para isto!';
            }
          }

          console.error(`Ocorreu um erro ${errorResponse.status}`, errorResponse);

        } else {
          msg = 'Error ao processar o serviço remoto. Tente Novamente.';
          console.log('ocorreu um Erro', errorResponse);
        }
      }
    }

    this.messageService.add({ severity: 'error', summary: 'Ops!', detail: msg });
  }

  voltarProLogin(from: string) {
    console.log('VOLTAR PRO LOGIN ACIONADO ERROR HANDLE from: ' + from)
    this.authService.limparAccessToken();
    this.router.navigate(['login'])
  }
}
