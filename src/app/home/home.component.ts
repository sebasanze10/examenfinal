import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseService } from '../servicios/firebase.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Cursos con Mayor Prestigio en la Ciudad de Potosí';
  objetos: any[] = [];
  darkMode = false;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.cargarObjetos();
    this.darkMode = document.body.classList.contains('dark-mode');
     const observer = new MutationObserver(() => {
      this.darkMode = document.body.classList.contains('dark-mode');
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
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
}