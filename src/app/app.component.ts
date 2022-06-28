import { Component, OnInit } from '@angular/core';
import { HistoricoService } from './services/historico.service';
import { SolicitudService } from './services/solicitud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'proyecto-angular-selsa';

  constructor(
    private historicoService: HistoricoService,
    private solicitudService: SolicitudService
  ) {
    console.log('el componente se ha creado');
  }

  ngOnInit(): void {}
}
