/** Realizacion de la importacion de los modulos y modelos necesarios */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SolicitudService } from 'src/app/services/solicitud.service';

/** Decorador Component */
@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss'],
})

export class SolicitudComponent implements OnInit {

  /**
   * Metodo Constructor
   * @param http instancia del servicio http
   * @param solicitudService instancia solicitudService que se llama para obtener el servicio Solicitud
   */
  constructor(private http: HttpClient,
    private solicitudService: SolicitudService) {
    console.log('servicio http');
    this.solicitudService.getData();
  }

  /** NgOnInit */
  ngOnInit(): void {}

  /** Funcion que retorna los datos de tipo JSON */
  get Datos() {
    return this.solicitudService.data;
  }

  /** Funcion que recibe el id de la solicitud para enviarlo
   * al servicio por medio de la funcion deleteSolicitud() y
   * asi mismo se elimina del arreglo de datos
   * */
  onDelete(id: number) {
    this.solicitudService.deleteSolicitud(id);
  }

}
