import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss'],
})

export class SolicitudComponent implements OnInit {

  constructor(private http: HttpClient,
    private solicitud: SolicitudService) {
    console.log('servicio http');
    this.solicitud.getData();
  }

  ngOnInit(): void {}

  get Datos() {
    return this.solicitud.data;
  }
}
