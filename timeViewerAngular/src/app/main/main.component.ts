// src/app/main/main.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnalogClockComponent } from '../analog-clock/analog-clock.component';
import { DigitalClockComponent } from '../digital-clock/digital-clock.component';
import { MilitaryClockComponent } from '../military-clock/military-clock.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, AnalogClockComponent, DigitalClockComponent, MilitaryClockComponent]
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
      case 'digital':
        return 'Digital Clock';
      case 'military':
        return 'Military Clock';
      default:
        return '';
    }
  }
}
