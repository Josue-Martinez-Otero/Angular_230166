import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; 
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  standalone: true, 
  imports: [MatToolbarModule]
})
export class ToolbarComponent {
  @Output() ejerciciosEvent = new EventEmitter<string[]>();
  @Output() logoutEvent = new EventEmitter<void>(); 
  @Output() tareasEvent = new EventEmitter<void>()
  ejercicios = [
    'Ejercicio 1',
    'Ejercicio 2',
    'Ejercicio 3',
    'Ejercicio 4',
    'Ejercicio 5',
    'Ejercicio 6',
    'Ejercicio 7',
    'Ejercicio 8',
    'Ejercicio 9',
    'Ejercicio 10',
    'Ejercicio 11',
    'Ejercicio 12',
  ];
   
  
  onEjerciciosClick() {
    this.ejerciciosEvent.emit(this.ejercicios); // Enviar la lista de ejercicios
  }
  onTareasClick() {
    this.tareasEvent.emit();  // Emitir el evento para Tareas
  }
}