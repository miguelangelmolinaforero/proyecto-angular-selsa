import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-peticion',
  templateUrl: './formulario-peticion.component.html',
  styleUrls: ['./formulario-peticion.component.scss']
})
export class FormularioPeticionComponent implements OnInit {

  // Declaracion de variables y arreglos
  OptionArray: string [];
  opcionSeleccionado: string = '';

  // Constructor
  constructor() {
    this.OptionArray = ['Disfrutados', 'Pagados y Disfrutados'];
   }

  ngOnInit(): void {
  }

  capturar(event: Event) {
    const element = event.target as HTMLInputElement;
    this.opcionSeleccionado = element.value;
  }

  onSubmit(){

  }

  onReturn(){
    window.location.replace('solicitud');
  }

}
