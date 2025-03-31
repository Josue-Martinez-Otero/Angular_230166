import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  comments = [
    'Angular es increíble 🚀',
    'Me encanta el sistema de componentes!',
    'El lazy loading mejora el rendimiento!',
    'La comunidad de Angular es muy activa.',
    'La funcionalidad @defer es muy útil.',
  ];

  loadMoreComments() {
    this.comments.push(
      'Nuevo comentario agregado dinámicamente!',
      'Angular sigue siendo genial!',
      '¡Más comentarios cargados!'
    );
  }
}