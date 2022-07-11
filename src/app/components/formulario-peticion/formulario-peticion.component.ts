import { Component, Input, OnInit } from '@angular/core';
import { FormPeticion } from '../formPeticion.model';
import { Solicitud } from "../solicitud/solicitud.model";

/**
 * Se importa el servicio SolicitudService
 */
import { SolicitudService } from 'src/app/services/solicitud.service';

/**
 * Se importa el servicio HistoricoService
 */
import { HistoricoService } from 'src/app/services/historico.service';
import { Historico } from '../landing/landing.model';

/**
 * Decorador Component
 */
@Component({
  selector: 'app-formulario-peticion',
  templateUrl: './formulario-peticion.component.html',
  styleUrls: ['./formulario-peticion.component.scss'],
})
export class FormularioPeticionComponent implements OnInit {
  /**
   * Declaracion de variables y arreglos
   */
  OptionArray: string[];
  /**
   * Descripcion de opcion seleccionada
   */
  opcionSeleccionado: string = '';
  /**
   * Index de opcion seleccionada
   */
  opcionSeleccionadoNumerico: number = 0;

  /**
   * se declara la variable de la fecha actual de la solicitud
   */
  now: Date = new Date();

  /**
   * se delcara el index de solicitud
   */
  index_array_solicitud: number = 0;

  /**
   * se delcara el index de historico
   */
  index_array_historico: number = 0;

  /**
   * declaracion de objeto
   */
  formRegister: FormPeticion = {
    tipoVacaciones: '',
    diasVacaciones: '',
    diasPagos: '',
    fechaSalida: '',
    observaciones: '',
  };

  /**
   * Declaracion de arreglo de tipo FormPeticion (No usados dentro del programa)
   */
  form: FormPeticion[] = [];

  /**
   * Se declara el formulario de solicitud
   */
  form_solicitud_register: Solicitud = {
    id: this.index_array_solicitud,
    modelo: '',
    referencia: 'VAC-12348',
    fecha_solicitud: '',
    etapa: 'solicitud',
    fecha_ultima_actividad_ejecutada: '10-FEB-2022',
    usuario_responsable: 'RR-HH',
    tiempo_evolucion: '1 días',
    observaciones: ''
  }



  /**
   * Constructor
   * @param solicitudService instancia del servicio Solicitud
   * @param historicoService instancia del servicio Historico
   */
  constructor(
    private solicitudService: SolicitudService,
    private historicoService: HistoricoService
    ) {
      this.OptionArray = ['Disfrutados', 'Pagos'];
  }

  /**
   * ngOnInit que se ejecuta apenas se corra el programa
   */
  ngOnInit(): void {
    // this.solicitudService.getData;
  }
  /**
   * Se declara el formulario de Historico
   */
  form_registro_historico: Historico = {
    id: this.index_array_historico,
    fecha_utilizacion: "",
    dias_utilizados: 0,
    forma_utilizacion: "",
    acta_disfrute: ""
  }

  /**
   *  Funcion que captura un valor y se lo asigna a la variable opcionSeleccionado
   * @param event Evento de tipo Event
   */
  capturarValorVacaciones(event: Event) {
    const element = event.target as HTMLInputElement;
    this.opcionSeleccionado = element.value;
  }

  /**
   * Funcion encargada de realizar la insercion de datos correctamente a cada uno de los arreglos JSON
   */
  onSubmit() {

    /** CARGUE DE DATOS DE LA SOLICITUD */

    /**
     * Se le da el valor al index de la solicitud
     */
    this.index_array_solicitud = this.solicitudService.getLength() + 1;
    this.form_solicitud_register.id = this.index_array_solicitud;

    /**
     * Se le da valor al modelo de la solicitud
     */
    this.opcionSeleccionadoNumerico = parseInt(this.opcionSeleccionado)
    this.form_solicitud_register.modelo = this.OptionArray[this.opcionSeleccionadoNumerico];

    /**
     * Se le da el valor a la fecha de la solicitud y la fecha de la ultima actividad ejecutada
     */
    this.form_solicitud_register.fecha_solicitud = this.now.toLocaleDateString();
    this.form_solicitud_register.fecha_ultima_actividad_ejecutada = this.now.toLocaleDateString();

    /**
     * Se le envia el objeto creado al servicio solicitud.model.ts el cual lo agrega a la trama JSON
     */
    this.solicitudService.addSolicitud(this.form_solicitud_register);

    /** CARGUE DE DATOS DEL HISTORICO */

    /**
     * Se le da el valor al index del historico
     */
    this.index_array_historico = this.historicoService.getLengthHistorico() + 1;
    this.form_registro_historico.id = this.index_array_historico;

    /**
     * Se le envia el objeto creado al servicio historico.model.ts el cual lo agrega a la trama JSON
     */
    this.historicoService.addHistorico(this.form_registro_historico);

  }

  /**
   * Funcion que nos lleva a la pagina de solicitud al hacer click
   */
  onReturn() {
    window.location.replace('solicitud');
  }
}
