/** Realizacion de la importacion de los modulos y modelos necesarios */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistoricoService } from 'src/app/services/historico.service';

/** Decorador Component */
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})

export class LandingComponent implements OnInit {

  /**
   * Metodo Constructor
   * @param http instancia del servicio http
   * @param prueba instancia de prueba en la cual se está llamando al servicio Historico
   */
  constructor(private http: HttpClient,
    private prueba: HistoricoService) {
    console.log('Servicio Http');
    this.prueba.getData();
  }

  /** NgOnInit */
  ngOnInit(): void {
  }

  /** Funcion que retorna los datos de tipo JSON */
  get Datos() {
    return this.prueba.data;
  }
}
