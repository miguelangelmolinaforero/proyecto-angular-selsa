// To parse this data:
//
//   import { Convert, Consultas } from "./file";
//
//   const consultas = Convert.toConsultas(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

/**
 * Interface modelo Consultas de tipo Solicitud
 */
export interface Consultas {
  /**
   * Variable solicitud de tipo solicitud
   */
  solicitud: Solicitud[];
}

/**
 * Interace modelo de solicitud en la cual se instancian cada una de sus atributos
 */
export interface Solicitud {
  /** id */
  id: number;
  /** model */
  modelo: string;
  /** ref */
  referencia: string;
  /** fecha solicitud */
  fecha_solicitud: string;
  /** etapa */
  etapa: string;
  /** fecha actividad */
  fecha_ultima_actividad_ejecutada: string;
  /** usuario responsable */
  usuario_responsable: string;
  /** tiempo evolucion */
  tiempo_evolucion: string;
  /** observaciones */
  observaciones: string;
}

/**
 * Instancia de etapa
 */
export enum Etapa {
  /**
   * variable solicitud
   */
  Solicitud = "solicitud",
}

/**
 * Instancia de modelo
 */
export enum Modelo {
  /**
   * tipo modelo
   */
  ModeloPagos = "pagos",
  /**
   * Pagos
   */
  Pagos = "Pagos",
  /**
   * Vacaciones
   */
  Vacaciones = "Vacaciones",
}

/**
 * Todos los usuarios responsables
 */
export enum UsuarioResponsable {
  /**
   * Gerencia
   */
  Gerencia = "Gerencia",
  /**
   * RH
   */
  RrHh = "RR-HH",
  /**
   * Tesorerias
   */
  Tesoreria = "Tesoreria",
}
