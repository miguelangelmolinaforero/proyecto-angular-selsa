// To parse this data:
//
//   import { Convert, Consultas } from "./file";
//
//   const consultas = Convert.toConsultas(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

/**
 * Interface de Consultas de tipo Historico
 */
export interface Consultas {
  /** variable historico de tipo Historico */
  historico: Historico[];
}

/**
 * Creacion de modelo Historico
 */
export interface Historico {
  /** id */
  id: number;
  /** fecha utilizacion */
  fecha_utilizacion: string;
  /** dias utilizados */
  dias_utilizados: number;
  /** forma utilizacion */
  forma_utilizacion: string;
  /** acta disfrute */
  acta_disfrute: string;
}

/**
 * Forma de utilizacion
 */
export enum FormaUtilizacion {
  /**
   * Disfrutados
   */
  Disfrutados = 'disfrutados',
  /**
   * Pagos
   */
  Pagos = 'pagos',
}
