import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, mergeMap, Observable } from "rxjs";
import { AuthService } from "./auth.service";

export class NotAuthenticatedError { }

@Injectable()
export class MoneyHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (!req.url.includes('/oauth/token') && this.authService.isAccessTokenInvalido()) {
      if (!req.url.includes('/security/authenticate') && this.authService.isAccessTokenInvalido()) {
      // console.log('TOKEN INVÀLIDO... INTERCEPT CHAMANDO RENOVAÇÂO DE TOKEN')
      return from(this.authService.obterNovoAccessToken('informar o refresh_token aqui'))
        .pipe(
          mergeMap(() => {

            if (this.authService.isAccessTokenInvalido()) {
              //se o token continua inválido, sinal que o refresh token já está expirado
              //instaciamos uma classe criada para identificar essa falha e remeter o sistema para a tela de login
              throw new NotAuthenticatedError();
            } else {
              //senão, segue a requisição passando o token no Header
              let token = localStorage.getItem('token');
              req = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${token}`
                }
              });

              return next.handle(req);
            }
          })
        );
    }

    return next.handle(req);
  }
}
