import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';  // Asegúrate de que la ruta sea correcta
import { DataTableComponent } from './app/data-table/data-table.component'; 

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]  // Aquí también se está proporcionando la configuración de las rutas
});
