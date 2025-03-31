import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { ContentComponent } from '../content/content.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [ToolbarComponent, SidebarComponent, BreadcrumbComponent, ContentComponent, FooterComponent, CommonModule],
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent {
  ejercicios: string[] = [];
  ejercicioSeleccionado: string = '';
  mostrarTareas: boolean = false;  // Variable para mostrar tareas
  mostrarEjercicios: boolean = false; // Nueva variable para mostrar ejercicios

  // Este método recibe la lista de ejercicios desde el ToolbarComponent
  onEjerciciosSelected(lista: string[]) {
    this.ejercicios = lista;
    if (this.ejercicios.length > 0) {
      this.ejercicioSeleccionado = this.ejercicios[0]; // Seleccionamos el primer ejercicio por defecto
    }
  }

  // Este método recibe el ejercicio seleccionado desde el BreadcrumbComponent
  seleccionarEjercicio(ejercicio: string) {
    this.ejercicioSeleccionado = ejercicio;
  }

  // Método para manejar el clic en "Tareas"
  onTareasClick() {
    this.mostrarTareas = true;
    this.mostrarEjercicios = false;  // Ocultar ejercicios cuando se muestren las tareas
  }

  // Método para manejar el clic en "Ejercicios"
  onEjerciciosClick() {
    this.mostrarEjercicios = true;
    this.mostrarTareas = false;  // Ocultar tareas cuando se muestren los ejercicios
  }
}
