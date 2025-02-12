import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // <-- Importa este módulo
import { AppComponent } from './app.component';
import { OloComponent } from './components/olo/olo.component'; // <-- Importa tu componente
import { RouterModule } from '@angular/router';  // 👈 Asegúrate de importar esto


@NgModule({
  declarations: [
    AppComponent, 
    OloComponent // <-- Agrega el componente aquí
  ],
  imports: [
    BrowserModule, 
    CommonModule, // <-- Importa esto para usar *ngIf, *ngFor, etc.
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent] // <-- Define el componente principal de arranque
})
export class AppModule { }
