// src/app/main/main.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnalogClockComponent } from '../analog-clock/analog-clock.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, AnalogClockComponent]
})
export class MainComponent {
  selectedView = ''; // Inicialmente vacío para que el reloj no se muestre

  onSelectView() {
    // Lógica para manejar cambios en la selección
  }

  getClockTitle() {
    switch (this.selectedView) {
      case 'analog':
        return 'Analog Clock';
      // Agregar más casos para otros tipos de relojes
      default:
        return '';
    }
  }
}