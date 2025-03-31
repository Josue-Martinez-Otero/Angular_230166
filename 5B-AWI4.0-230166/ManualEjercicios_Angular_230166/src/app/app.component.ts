import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageContainerComponent } from './components/page-container/page-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PageContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ManualEjercicios_Angular_230166';
}
