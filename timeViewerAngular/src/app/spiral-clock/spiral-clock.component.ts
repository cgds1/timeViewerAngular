import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-spiral-clock',
  templateUrl: './spiral-clock.component.html',
  styleUrls: ['./spiral-clock.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule] // Incluye CommonModule aquí
})
export class SpiralClockComponent {
  userHour: number = new Date().getHours();
  userMinute: number = new Date().getMinutes();
  userSecond: number = new Date().getSeconds();
  interval: any;

  ngOnInit() {
    this.startClock();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  startClock() {
    this.interval = setInterval(() => {
      this.userSecond++;
      if (this.userSecond >= 60) {
        this.userSecond = 0;
        this.userMinute++;
      }
      if (this.userMinute >= 60) {
        this.userMinute = 0;
        this.userHour++;
      }
      if (this.userHour >= 24) {
        this.userHour = 0;
      }
    }, 1000);
  }

  updateManualTime() {
    clearInterval(this.interval); // Detiene la actualización automática
    this.startClock(); // Reinicia desde el tiempo modificado
  }

  getSpiralStyle(unit: number, max: number) {
    const scale = unit / max;
    const size = 150 * scale + 50; // Ajusta el tamaño proporcionalmente
    return {
      width: `${size}px`,
      height: `${size}px`,
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: `hsl(${scale * 360}, 70%, 50%)`
    };
  }
}
