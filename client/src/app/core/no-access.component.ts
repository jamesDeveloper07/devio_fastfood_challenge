import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="conteiner">
      <h1 class="text-center">Acesso Negado!</h1>
    </div>
  `,
  styles: [
  ]
})
export class NoAccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
