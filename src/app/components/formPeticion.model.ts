/**
 * Interface needed for FormPeticion
 */
export interface FormPeticion {
  /** tipo de vacaiones */
  tipoVacaciones: string;
  /** dias tomados para vacaciones (Opcional) */
  diasVacaciones?: string;
  /** dias pagados (opcional) */
  diasPagos?: string;
  /** fecha de salida */
  fechaSalida: string;
  /** observaciones */
  observaciones: string;
}
