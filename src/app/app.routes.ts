import { Routes } from '@angular/router';
import { ListarContratosComponent } from './Components/listar-contratos/listar-contratos.component';
import { CreateContratoComponent } from './Components/create-contrato/create-contrato.component';

export const routes: Routes = [
  {
    path: 'listar-contratos', // Ruta para listar contratos
    component: ListarContratosComponent,
  },
  {
    path: 'crear-contrato', // Ruta para crear contratos
    component: CreateContratoComponent,
  },
  {
    path: '', // Redirección a la ruta principal
    redirectTo: 'listar-contratos',
    pathMatch: 'full',
  },
  {
    path: '**', // Ruta para manejar páginas no encontradas
    redirectTo: 'listar-contratos',
  },
];
