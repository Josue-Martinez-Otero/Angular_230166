import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  imports: [CommonModule]
})
export class BreadcrumbComponent {
  @Input() ejercicios: string[] = [];
  @Output() ejercicioSeleccionado = new EventEmitter<string>();

  seleccionar(ejercicio: string) {
    console.log('Ejercicio seleccionado desde Breadcrumb:', ejercicio);
    this.ejercicioSeleccionado.emit(ejercicio);
  }
}
