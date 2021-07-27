import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  contador: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  sumar() {
    this.contador ++;
  }
  restar() {
    this.contador --;
  }

}
