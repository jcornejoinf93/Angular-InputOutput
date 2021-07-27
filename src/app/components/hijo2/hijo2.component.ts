import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component {

  @Input() contaadorHijo: number = 1;
  @Output() contadorEnvio2 = new EventEmitter<number>();

  sumar() {
    this.contaadorHijo ++;
    this.contadorEnvio2.emit(this.contaadorHijo);
  }

  restar() {
    this.contaadorHijo --;
    this.contadorEnvio2.emit(this.contaadorHijo);
  }
}
