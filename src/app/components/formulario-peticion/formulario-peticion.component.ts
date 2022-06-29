import { Component, Input, OnInit } from '@angular/core';
import { FormPeticion } from '../formPeticion.model';
import { Solicitud } from "../solicitud/solicitud.model";

// Se importa el servicio SolicitudService
import { SolicitudService } from 'src/app/services/solicitud.service';


@Component({
  selector: 'app-formulario-peticion',
  templateUrl: './formulario-peticion.component.html',
  styleUrls: ['./formulario-peticion.component.scss'],
})
export class FormularioPeticionComponent implements OnInit {
  // Declaracion de variables y arreglos
  OptionArray: string[];
  opcionSeleccionado: string = '';
  opcionSeleccionadoNumerico: number = 0;

  // se delcara el index
  index_array: number = 0;

  // declaracion de objeto
  formRegister: FormPeticion = {
    tipoVacaciones: '',
    diasVacaciones: '',
    diasPagos: '',
    fechaSalida: '',
    observaciones: '',
  };

  form: FormPeticion[] = [];

  // Se declara el formulario de solicitud

  form_solicitud_register: Solicitud = {
    id: this.index_array,
    modelo: '',
    referencia: 'VAC-12348',
    fecha_solicitud: '',
    etapa: 'solicitud',
    fecha_ultima_actividad_ejecutada: '10-FEB-2022',
    usuario_responsable: 'RR-HH',
    tiempo_evolucion: '1 días',
    observaciones: ''
  }


  // Constructor
  constructor(
    private solicitudService: SolicitudService
  ) {
    this.OptionArray = ['Disfrutados', 'Pagos'];
  }

  ngOnInit(): void {
    // this.solicitudService.getData;
  }

  capturarValorVacaciones(event: Event) {
    const element = event.target as HTMLInputElement;
    this.opcionSeleccionado = element.value;
  }

  onSubmit() {
    this.index_array = this.solicitudService.getLength() + 1;
    this.form_solicitud_register.id = this.index_array;

    this.opcionSeleccionadoNumerico = parseInt(this.opcionSeleccionado)
    this.form_solicitud_register.modelo = this.OptionArray[this.opcionSeleccionadoNumerico];

    this.solicitudService.addSolicitud(this.form_solicitud_register);
  }

  onReturn() {
    window.location.replace('solicitud');
  }
}
