import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { NavbarComponent } from './../core/navbar/navbar.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    private router: Router,
    private navbarComponent: NavbarComponent,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isAccessTokenInvalido()) {

      return this.authService.obterNovoAccessToken('informar refresh_token aqui')
        .then(() => {
          if (this.authService.isAccessTokenInvalido()) {
            console.log('REFRESH TOKEN NÂO MAIS FUNCIONOU')
            console.log('ACIONAR VOLTAR PRO LOGIN')
            this.voltarProLogin('obterNovoAccessToken');
            return false;
          }
          return true;
        })

    } else if (route.data['permissions'] && !this.authService.hasAnyPermission(route.data['permissions'])) {
      this.router.navigate(['/no-access']);
      return false;
    }
    return true;
  }

  voltarProLogin(from: string) {
    console.log('VOLTAR PRO LOGIN ACIONADO AUTH.GUARD from: ' + from)
    this.authService.limparAccessToken();
    this.navbarComponent.voltarProLogin('AUTH.GUARD (voltarProLogin)');
  }

}
