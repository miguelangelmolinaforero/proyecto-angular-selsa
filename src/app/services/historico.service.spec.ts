/**
 * Importaciones
 */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HistoricoService } from './historico.service';

/**
 * Inicio de describe principal
 */
describe('HistoricoService', () => {
  /** variable designada al servicio Historico */
  let service: HistoricoService;
  /** variable desiganada al controlador http */
  let httpController: HttpTestingController;

  /**
   * Sentencia de codigo que se ejecutará antes de que todo mientras que se corre la aplicacion
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ HistoricoService ]
    });
    service = TestBed.inject(HistoricoService);
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

  /**
   * El servicio debería ser creado
   */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * Pruebas para getLenghtHistorico()
   */
  describe('Tests for getLengthHistorico()', () => {
    it('should return 10', () => {
      expect(service.getLengthHistorico()).toBe(0);
    });
  });

});
