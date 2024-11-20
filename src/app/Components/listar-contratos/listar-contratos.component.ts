import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../../services/Contratos/contrato.service';
import { Contrato } from '../../models/Contrato.model';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-listar-contratos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-contratos.component.html',
  styleUrls: ['./listar-contratos.component.css']
})
export class ListarContratosComponent implements OnInit {
  contratos: Contrato[] = []; // Lista de contratos
  errorMessage: string = ''; // Mensaje para errores

  constructor(private contratoService: ContratoService) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.loadContratos(); // Carga los contratos al iniciar el componente
  }

  // Método para cargar los contratos desde el servicio
  loadContratos(): void {
    this.contratoService.getAllContratos().subscribe({
      next: (data) => {
        this.contratos = data; // Asigna los contratos obtenidos al arreglo
      },
      error: (error) => {
        this.errorMessage = 'Ocurrió un error al cargar los contratos.';
        console.error('Error al cargar los contratos:', error);
      }
    });
  }
}
