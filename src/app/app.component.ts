/**
 * Imports needed for the correct program work
 */
import { Component, OnInit } from '@angular/core';
import { HistoricoService } from './services/historico.service';
import { SolicitudService } from './services/solicitud.service';

/**
 * Component decorator for declarate the selector, template, and url for scss
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /**
   * Title project
   */
  title = 'proyecto-angular-selsa';

  /**
   * Constructor method
   * @param historicoService is for create an instance for the service 'Historico'
   * @param solicitudService is for create an instance for the service 'Solicitud'
   */
  constructor(
    private historicoService: HistoricoService,
    private solicitudService: SolicitudService
  ) {
    console.log('el componente se ha creado');
  }

  /**
   * ngOnInit function is used for doing some process when we run the server
   */
  ngOnInit(): void {}
}
