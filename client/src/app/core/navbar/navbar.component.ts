import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../seguranca/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  exibindoMenu: boolean = false;
  items: MenuItem[] = [];
  noItems: MenuItem[] = [];
  styleBotao: any = {
    'display': 'flex',
    'background-color': '#fff',
    'border': '1px solid #fff',
    'border-radius': '5px',
    'font-weight': '700',
    'margin-right': '10px',
    'height': '30px',
  }

  constructor(
    public authService: AuthService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('INIT BARRA DE NAVEGACAO');

    this.items = [
      {
        label: 'Pedidos',
        style: this.styleBotao,
        routerLink: ['/pedidos'],
        routerLinkActiveOptions: {
          exact: true
        },
        disabled: (this.hasUserLogado() ? !this.hasPermission('ver_pedidos') : true)
      },
      {
        label: 'Cozinha',
        style: this.styleBotao,
        routerLink: ['/cozinha'],
        routerLinkActiveOptions: {
          exact: true
        },
        disabled: (this.hasUserLogado() ? !this.hasPermission('atualizar_pedidos') : true)
      },
      {
        label: 'Retirada',
        style: this.styleBotao,
        routerLink: ['/retirada'],
        routerLinkActiveOptions: {
          exact: true
        },
        disabled: (this.hasUserLogado() ? false : true)
      },
      {
        label: 'Sair',
        style: this.styleBotao,
        icon:'pi pi-fw pi-power-off',
        command: (event) => {
          //event.originalEvent: Browser event
          //event.item: menuitem metadata
          console.log('CLIQUEI EM SAIR')
          console.log(event)
          this.logout()
        }
      }

    ]


  }

  hasUserLogado() {
    return this.authService.hasUserLogado();
  }

  hasRole(role: string) {
    return this.authService.hasRole(role);
  }

  hasPermission(permission: string) {
    return this.authService.hasPermission(permission);
  }

  logout() {
    this.authService.logout()
      .then(() => {
        this.voltarProLogin('LOGOUT NAVBAR');
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  voltarProLogin(from: string) {
    console.log('VOLTAR PRO LOGIN ACIONADO NAVBAR voltarProLogin from: ' + from)
    this.authService.limparAccessToken();
    this.exibindoMenu = false;
    this.router.navigate(['login'])
  }


}
