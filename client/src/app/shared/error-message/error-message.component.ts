import { Component, Input, OnInit } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  template: `
  <small class="p-error" *ngIf="hasError()">
    {{ text }}
  </small>
  `,
  styles: [
  ]
})
export class ErrorMessageComponent {

  @Input() error: string = '';
  @Input() control: FormControl = new FormControl;
  @Input() text: string = '';

  hasError(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }


}
