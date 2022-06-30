import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consultas, Solicitud } from '../components/solicitud/solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private http: HttpClient) { }

  data: Solicitud[] = [];

  getData(){
    this.http.get<Consultas>('http://localhost:3000/solicitud').subscribe((response) => {
      // console.log(response);
      this.data = response.solicitud;
    })
  }

  getLength(){
    return this.data.length;
  }

  addSolicitud(solicitud: Solicitud){
    this.data.push(solicitud);
    console.log(this.data);

  }

  deleteSolicitud (id: number) {
    // con la funcion finIndex encontramos el indice del arreglo en la cual se le envia el id
    let index = this.data.findIndex(d => d.id === id);
    this.data.splice(index, 1);
  }

}
