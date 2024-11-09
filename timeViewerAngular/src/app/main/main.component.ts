// src/app/main/main.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnalogClockComponent } from '../analog-clock/analog-clock.component';
import { DigitalClockComponent } from '../digital-clock/digital-clock.component';
import { MilitaryClockComponent } from '../military-clock/military-clock.component';
import { HourglassClockComponent } from '../hourglass-clock/hourglass-clock.component';
import { SundialClockComponent } from '../sundial-clock/sundial-clock.component';
import { MeterClockComponent } from '../meter-clock/meter-clock.component';
import { SteamClockComponent } from '../steam-clock/steam-clock.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    AnalogClockComponent,
    DigitalClockComponent,
    MilitaryClockComponent,
    HourglassClockComponent,
    SundialClockComponent,
    MeterClockComponent,
    SteamClockComponent
  ]
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
      case 'hourglass':
        return 'Hourglass Clock';
      case 'sundial':
        return 'Sundial Clock';
      case 'meter':
        return 'Meter Clock';
      case 'steam':
        return 'Steam Clock';
      default:
        return '';
    }
  }
}
