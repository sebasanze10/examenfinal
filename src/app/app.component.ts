import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { FirebaseService } from './servicios/firebase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, HeaderComponent, FooterComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cursos con Mayor Prestigio en la Ciudad de Potosí';
  objetos: any[] = [];
  darkMode = false;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.cargarObjetos();
  }

  cargarObjetos() {
    this.firebaseService.getObjetos().subscribe((res: any) => {
      this.objetos = Object.keys(res || {}).map(key => ({
        id: key,
        colegio: res[key].colegio,
        curso: res[key].curso,
        materia: res[key].materia,
        profesor: res[key].profesor,
        cantidadEstudiantes: res[key].cantidadEstudiantes,
        imagen: res[key].imagen
      }));
    });
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
