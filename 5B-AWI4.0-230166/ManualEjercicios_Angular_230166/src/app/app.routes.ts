// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Ejercicio01Component } from './ejercicio-01/ejercicio-01.component';
import { Ejercicio02Component } from './ejercicio-02/ejercicio-02.component';
import { Ejercicio03Component } from './ejercicio-03/ejercicio-03.component';
import { Ejercicio04Component } from './ejercicio-04/ejercicio-04.component';
import { Ejercicio05Component } from './ejercicio-05/ejercicio-05.component';
import { Ejercicio06Component } from './ejercicio-06/ejercicio-06.component';

// Asegúrate de exportar las rutas aquí
export const routes: Routes = [
  { path: 'ejercicio/1', component: Ejercicio01Component },
  { path: 'ejercicio/2', component: Ejercicio02Component },
  { path: 'ejercicio/3', component: Ejercicio03Component },
  { path: 'ejercicio/4', component: Ejercicio04Component },
  { path: 'ejercicio/5', component: Ejercicio05Component },
  { path: 'ejercicio/6', component: Ejercicio06Component },
  { path: '', redirectTo: '/ejercicio/1', pathMatch: 'full' },
  { path: '**', redirectTo: '/ejercicio/1', pathMatch: 'full' } // Ruta por defecto
];
