import { Component } from '@angular/core';
import {Carro} from "../shared/model/carro";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'Estacionamento';
  carro: Carro;
  carros: Array<Carro>;

  constructor() {
    this.carro = new Carro();
    this.carros = new Array<Carro>();
  }

  inserirCarro(): void {
    this.carros.push(this.carro);
    this.carro = new Carro();
  }

  editarCarro(carro : Carro) : void {
    let index : number = this.carros.findIndex(carroRemover => carroRemover.placa == carro.placa);
    this.carros[index] = this.carro;
  }

  removerCarro(carro : Carro): void {
    let index : number = this.carros.findIndex(carroRemover => carroRemover.placa == carro.placa);
    this.carros.splice(index, 1);
  }

}
