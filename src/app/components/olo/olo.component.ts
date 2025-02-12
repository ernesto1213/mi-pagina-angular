import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; // Para cerrar el diálogo

@Component({
  selector: 'app-olo',
  templateUrl: './olo.component.html',
  styleUrls: ['./olo.component.scss']
})
export class OloComponent {

  constructor(public dialogRef: MatDialogRef<OloComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();  // Cierra el diálogo cuando se hace clic en el botón "Cerrar"
  }
}
