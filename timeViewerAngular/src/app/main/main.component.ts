import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnalogClockComponent } from '../analog-clock/analog-clock.component';
import { DigitalClockComponent } from '../digital-clock/digital-clock.component';
import { MeterClockComponent } from '../meter-clock/meter-clock.component';
import { WordClockComponent } from '../word-clock/word-clock.component'; 
import { ProgressClockComponent } from '../progress-clock/progress-clock.component';
import { BinaryClockComponent } from '../binary-clock/binary-clock.component';
import { ColorCircleClockComponent } from '../color-circle-clock/color-circle-clock.component';
import { SpiralClockComponent } from '../spiral-clock/spiral-clock.component';

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
    MeterClockComponent,
    WordClockComponent,
    ProgressClockComponent,
    BinaryClockComponent,
    ColorCircleClockComponent,
    SpiralClockComponent 
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
      case 'meter':
        return 'Meter Clock';
        case 'word':
          return 'Word Clock';
        case 'progress':
          return 'Progress Clock';
        case 'binary':
          return 'Binary Clock';
        case 'spiral':
          return 'Spiral Clock';
      default:
        return '';
    }
  }
}
