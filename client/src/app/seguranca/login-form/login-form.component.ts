import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { Login } from './../../core/model';
import { AuthService } from './../auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { NavbarComponent } from './../../core/navbar/navbar.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  login = new Login();

  constructor(
    public authService: AuthService,
    private messageService: MessageService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logar(loginForm: NgForm) {
    if (this.login && this.login.usuario && this.login.senha) {
      console.log('METODO LOGAR')
      this.authService.login(this.login.usuario, this.login.senha)
        .then(() => {
          console.log('CHEGOU NO THEN')
          this.irParaPaginaInicial();
        })
        .catch(erro => {
          console.log('ENTROU NO CATCH')
          this.errorHandlerService.handle(erro);
          this.login.senha = '';
        })
    } else {
      console.log('DADOS DE LOGIN INVÁLIDOS');
      this.errorHandlerService.handle('Dados de Login Inválidos!');
    }
  }

  irParaPaginaInicial() {
    this.router.navigate(['/pedidos']);
  }

  esqueciSenha() {
    console.log('Implementar serviço esqueci senha');
  }

}
