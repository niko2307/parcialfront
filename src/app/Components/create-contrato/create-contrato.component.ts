import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Para solicitudes HTTP
import { ContratoService } from '../../services/Contratos/contrato.service';
import { CommonModule } from '@angular/common'; // Importa CommonModule
@Component({
  selector: 'app-create-contrato',
  standalone: true, // Declara el componente como standalone
  imports: [ReactiveFormsModule, HttpClientModule,CommonModule], // Importa los módulos necesarios
  templateUrl: './create-contrato.component.html',
  styleUrls: ['./create-contrato.component.css']
})
export class CreateContratoComponent {
  contratoForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private contratoService: ContratoService) {
    // Inicializa el formulario reactivo
    this.contratoForm = this.fb.group({
      valor: ['', [Validators.required, Validators.min(0)]],
      nombreContratante: ['', [Validators.required]],
      documentoContratante: ['', [Validators.required]],
      nombreContratantista: ['', [Validators.required]],
      documentoContratantista: ['', [Validators.required]],
      fechaInicial: ['', [Validators.required]],
      fechaFinal: ['', [Validators.required]],
      estado: ['ACTIVO', [Validators.required]], // Valor predeterminado
    });
  }

  onSubmit(): void {
    if (this.contratoForm.valid) {
      const contrato = this.contratoForm.value;
      this.contratoService.createContrato(contrato).subscribe({
        next: () => {
          this.successMessage = 'Contrato creado exitosamente.';
          this.contratoForm.reset();
          this.errorMessage = '';
        },
        error: (err) => {
          this.errorMessage = 'Ocurrió un error al crear el contrato.';
          console.error(err);
          this.successMessage = '';
        },
      });
    } else {
      this.errorMessage = 'Por favor, complete todos los campos obligatorios.';
    }
  }
}
