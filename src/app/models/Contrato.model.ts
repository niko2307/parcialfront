export interface Contrato {
    id: number;
    valor: number;
    nombreContratante: string;
    documentoContratante: string;
    nombreContratantista: string;
    documentoContratantista: string;
    fechaInicial: string;
    fechaFinal: string;
    estado: string; // Puede ser "ACTIVO", "INACTIVO", etc.
  }