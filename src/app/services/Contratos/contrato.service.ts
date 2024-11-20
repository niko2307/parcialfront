import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrato } from '../../models/Contrato.model';

@Injectable({
  providedIn: 'root',
})
export class ContratoService {
  // URL base de la API del backend
  private apiUrl = 'http://localhost:8080/api/contratos';

  constructor(private http: HttpClient) {}

  // Obtener todos los contratos
  getAllContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(`${this.apiUrl}/all`);
  }

  // Obtener un contrato por ID
  getContratoById(id: number): Observable<Contrato> {
    return this.http.get<Contrato>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo contrato
  createContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(`${this.apiUrl}/create`, contrato);
  }

  // Actualizar un contrato existente
  updateContrato(id: number, contrato: Contrato): Observable<Contrato> {
    return this.http.put<Contrato>(`${this.apiUrl}/update/${id}`, contrato);
  }

  // Eliminar un contrato por ID
  deleteContrato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  // Cambiar el estado de un contrato a INACTIVO
  deactivateContrato(id: number): Observable<Contrato> {
    return this.http.put<Contrato>(`${this.apiUrl}/deactivate/${id}`, null);
  }

  // Obtener contratos por estado
  getContratosByEstado(estado: string): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(`${this.apiUrl}/estado/${estado}`);
  }
}
