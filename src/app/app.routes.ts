import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cuestionario', component: CuestionarioComponent },
  { path: 'contacto', component: ContactoComponent },
];
