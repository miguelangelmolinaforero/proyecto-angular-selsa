import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistoricoService } from 'src/app/services/historico.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})

export class LandingComponent implements OnInit {

  constructor(private http: HttpClient,
    private prueba: HistoricoService) {
    console.log('Servicio Http');
    this.prueba.getData();
  }

  ngOnInit(): void {
  }

  get Datos() {
    return this.prueba.data;
  }
}
