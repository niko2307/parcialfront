import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Proveedor para rutas
    provideClientHydration(), // Soporte para SSR/hidratación
    importProvidersFrom(ReactiveFormsModule), // Importa ReactiveFormsModule
    importProvidersFrom(HttpClientModule), // Importa HttpClientModule
  ]
};
