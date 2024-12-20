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
import { SpiralLoadClockComponent } from "../spiral-load-clock/spiral-load-clock.component";
import { RomanClockComponent } from '../roman-clock/roman-clock.component';

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
    SpiralClockComponent,
    SpiralLoadClockComponent,
    RomanClockComponent
  ]
})
export class MainComponent {
  currentView: string = 'digital';

  selectView(view: string) {
    this.currentView = view;
  }

  logout() {
    window.location.href = '/login';
  }
}
