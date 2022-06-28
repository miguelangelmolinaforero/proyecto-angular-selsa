import { Component, OnInit } from '@angular/core';

import { FormPeticion } from '../formPeticion.model';

@Component({
  selector: 'app-formulario-peticion',
  templateUrl: './formulario-peticion.component.html',
  styleUrls: ['./formulario-peticion.component.scss'],
})
export class FormularioPeticionComponent implements OnInit {
  // Declaracion de variables y arreglos
  OptionArray: string[];
  opcionSeleccionado: string = '';

  // declaracion de objeto
  formRegister: FormPeticion = {
    tipoVacaciones: '',
    diasVacaciones: '',
    diasPagos: '',
    fechaSalida: '',
    observaciones: '',
  };

  form: FormPeticion[] = [];

  // Constructor
  constructor() {
    this.OptionArray = ['Disfrutados', 'Pagados y Disfrutados'];
  }

  ngOnInit(): void {}

  capturarValorVacaciones(event: Event) {
    const element = event.target as HTMLInputElement;
    this.opcionSeleccionado = element.value;
  }

  onSubmit() {
    this.form.push(this.formRegister);
    console.log(this.form);
  }

  onReturn() {
    window.location.replace('solicitud');
  }
}
