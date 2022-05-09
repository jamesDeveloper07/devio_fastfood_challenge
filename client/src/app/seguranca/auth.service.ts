import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl: string;
  tokensRevokeUrl: string;
  userLogado: any;

  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService
  ) {
    this.oauthTokenUrl = `${environment.apiUrl}/security/authenticate`;
    this.tokensRevokeUrl = `${environment.apiUrl}/security/revoke`;
    this.carregarToken();
  }

  login(usuario: string, senha: string): Promise<void> {

    let body = {
      email: usuario,
      password: senha
    };

    return this.http.post(this.oauthTokenUrl, body)
      .toPromise()
      .then((response: any) => {
        console.log("RETORNO LOGIN")
        console.log({ response })
        if (response && response.auth) {
          this.armazenarSession(response)
        }
      })
      .catch((response: any) => {
        if (response.status === 400) {
          if (response.error.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida!')
          }
        }

        return Promise.reject(response)
      })
  }

  armazenarSession(response: any) {
    console.log("ENTROU NO ARMAZENAR SESSION")
    this.userLogado = response.user;
    console.log(this.userLogado)
    localStorage.setItem('user', JSON.stringify(response.user));
    localStorage.setItem('auth', JSON.stringify(response.auth));
    localStorage.setItem('token', response.auth.token);
  }

  armazenartoken(token: string) {
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');
    let user = localStorage.getItem('user');

    if (token) {
      this.armazenartoken(token);
    }

    if (user) {
      this.userLogado = JSON.parse(user);
    }
  }

  hasUserLogado() {
    const user = localStorage.getItem('user');
    return user;
  }

  hasRole(role: string) {
    // return this.jwtPayload && this.jwtPayload.authorities.includes(permission)
    const roles = this.userLogado?.roles;
    if (roles) {
      for (const r of roles) {
        if (r.slug === role) {
          return true
        }
      }
    }
    return false
  }

  hasAnyRole(roles: Array<string>) {
    for (const role of roles) {
      if (this.hasRole(role)) {
        return true;
      }
    }
    return false;
  }


  hasPermission(permission: string) {
    // return this.jwtPayload && this.jwtPayload.authorities.includes(permission)
    const roles = this.userLogado?.roles;
    if (roles) {
      for (const r of roles) {
        const permissions = r.permissions
        if (permissions) {
          for (const p of permissions) {
            if (p.slug === permission) {
              return true
            }
          }
        }
      }
    }
    return false
  }

  hasAnyPermission(permissions: Array<string>) {
    for (const permission of permissions) {
      if (this.hasPermission(permission)) {
        return true;
      }
    }
    return false;
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');
    return !token || this.jwtHelperService.isTokenExpired(token);
  }

  obterNovoAccessToken(refresh_token: string): Promise<void | null> {
    let body = {
      refresh_token: refresh_token
    };

    return this.http.post(this.oauthTokenUrl, body)
      .toPromise()
      .then((response: any) => {
        if (response && response.auth) {
          this.armazenarSession(response)
          console.log('Novo Access Token criado!');
        }
      })
      .catch((response: any) => {
        console.log('Erro ao renovar o token', response);
        return Promise.resolve(null);
      })
  }

  limparAccessToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('auth');
    this.userLogado = null;
  }

  logout() {
    return this.http.delete(this.tokensRevokeUrl)
      .toPromise()
      .then((response: any) => {
        this.limparAccessToken();
      })
  }

}
