import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OloComponent } from './components/olo/olo.component'; // <-- Importa el componente Olo

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // <-- Corregí styleUrl por styleUrls
})
export class AppComponent {
  mensaje: string | null = null;

  constructor(public dialog: MatDialog) {}

  // Función para mostrar el mensaje
  mostrarMensaje(): void {
    this.dialog.open(OloComponent);  // Abre el recuadro emergente con el componente Olo
  }

  moverBoton(event: MouseEvent) {
    const boton = event.target as HTMLElement;
    const nuevoX = Math.random() * window.innerWidth * 0.8;
    const nuevoY = Math.random() * window.innerHeight * 0.8;

    boton.style.position = 'absolute';
    boton.style.left = `${nuevoX}px`;
    boton.style.top = `${nuevoY}px`;
  }
}
