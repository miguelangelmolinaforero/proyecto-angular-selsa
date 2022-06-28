import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consultas, Historico } from '../components/landing/landing.model';

@Injectable({
  providedIn: 'root',
})
export class HistoricoService {
  constructor(private http: HttpClient) {}

  data: Historico[] = [];

  getData() {
    this.http
      .get<Consultas>('http://localhost:3000/historico').subscribe((response) => {
        console.log(response);
        this.data = response.historico;
      });
  }
}
