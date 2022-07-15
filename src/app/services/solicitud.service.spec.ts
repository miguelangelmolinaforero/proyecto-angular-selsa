/**
 * Importaciones
 */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SolicitudService } from './solicitud.service';

/**
 * Inicio de describe principal
 */
describe('SolicitudService', () => {
  let service: SolicitudService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ SolicitudService ]
    });
    service = TestBed.inject(SolicitudService);

    /**
     * Se invoca el controlador http
     */
     httpController = TestBed.inject(HttpTestingController);
  });

  /**
   * Despues de la ejecución se verifica el estado del controlador http
   */
   afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
