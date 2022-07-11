/**
 * Importaciones necesarias
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consultas, Historico } from '../components/landing/landing.model';

/**
 * Decorador de inyecciones
 */
@Injectable({
  /** variable de ruta */
  providedIn: 'root',
})
export class HistoricoService {
  /**
   * Metodo constructor
   * @param http servicio http que se necesita para recibir la peticion
   */
  constructor(private http: HttpClient) {}

  /** declaracion de arreglo del tipo de la interface Historico */
  data: Historico[] = [];

  /**
   * Funcion getData() que nos devuelve el arreglo de objetos json y nos
   * la guarda por medio de la variable data
   */
  getData() {
    this.http
      .get<Consultas>('http://localhost:3000/historico').subscribe((response) => {
        console.log(response);
        this.data = response.historico;
      });
  }

  /** funcion que devuelve la longitud del array JSON */
  getLengthHistorico(){
    return this.data.length;
  }

  /**
   * funcion que agrega el objeto al arreglo JSON
   * @param historico se recibe la variable historico de tipo
   * Historico para realizar el guardado de datos
   */
  addHistorico(historico: Historico){
    this.data.push(historico);
    console.log(this.data);
  }

}
