import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ejercicio-09',
  standalone: true,
  templateUrl: './ejercicio-09.component.html',
  styleUrls: ['./ejercicio-09.component.css']
})
export class Ejercicio09Component {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}