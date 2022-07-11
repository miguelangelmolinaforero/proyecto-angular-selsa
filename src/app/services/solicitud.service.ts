/**
 * Importaciones necesarias
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consultas, Solicitud } from '../components/solicitud/solicitud.model';

/**
 * Decorador de inyecciones
 */
@Injectable({
  /** variable de ruta */
  providedIn: 'root'
})
export class SolicitudService {

  /**
   * Metodo constructor
   * @param http servicio http que se necesita para recibir la peticion
   */
  constructor(private http: HttpClient) { }

  /** declaracion de arreglo del tipo de la interface Solicitud */
  data: Solicitud[] = [];

   /**
   * Funcion getData() que nos devuelve el arreglo de objetos json y nos
   * la guarda por medio de la variable data
   */
  getData(){
    this.http.get<Consultas>('http://localhost:3000/solicitud').subscribe((response) => {
      // console.log(response);
      this.data = response.solicitud;
    })
  }

  /** funcion que devuelve la longitud del array JSON */
  getLength(){
    return this.data.length;
  }

  /**
   * funcion que agrega el objeto al arreglo JSON
   * @param solicitud se recibe la variable solicitud de tipo
   * Solicitud para realizar el guardado de datos
   */
  addSolicitud(solicitud: Solicitud){
    this.data.push(solicitud);
    console.log(this.data);

  }

  /**
   * Funcion que realiza la eliminacion del objeto dentro del
   * arreglo JSON
   * @param id parametro necesario para obtener el index del
   * objeto
   */
  deleteSolicitud (id: number) {
    // con la funcion finIndex encontramos el indice del arreglo en la cual se le envia el id
    let index = this.data.findIndex(d => d.id === id);
    this.data.splice(index, 1);
  }

}
