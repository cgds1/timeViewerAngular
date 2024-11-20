import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spiral-load-clock',
  templateUrl: './spiral-load-clock.component.html',
  styleUrls: ['./spiral-load-clock.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class SpiralLoadClockComponent {
  userHour = new Date().getHours();
  userMinute = new Date().getMinutes();
  userSecond = new Date().getSeconds();
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
        if (this.userMinute >= 60) {
          this.userMinute = 0;
          this.userHour = (this.userHour + 1) % 24;
        }
      }
    }, 1000);
  }

  onTimeUpdate() {
    clearInterval(this.interval); // Detener el reloj
    this.startClock(); // Reiniciar el reloj
  }

  getFillStyle(value: number, total: number, color: string) {
    const percentage = (value / total) * 360;
    return {
      'background-image': `conic-gradient(${color} ${percentage}deg, transparent 0deg)`,
    };
  }
}
