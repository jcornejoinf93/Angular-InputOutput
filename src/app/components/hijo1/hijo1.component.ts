import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component {

  @Input() contadorHijo: number = 1;
  @Output() contadorEnvio = new EventEmitter<number>();


  sumar() {
    this.contadorHijo ++;
    this.contadorEnvio.emit(this.contadorHijo);
  }
  restar() {
    this.contadorHijo --;
    this.contadorEnvio.emit(this.contadorHijo);
  }

  actualizarConteo(evento) {
    this.contadorEnvio.emit(evento);
  }

}
