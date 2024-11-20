import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-circle-clock',
  templateUrl: './color-circle-clock.component.html',
  styleUrls: ['./color-circle-clock.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class ColorCircleClockComponent {
  userHour: number = new Date().getHours();
  userMinute: number = new Date().getMinutes();
  userSecond: number = new Date().getSeconds();
  manualAdjustment: boolean = false;

  ngOnInit(): void {
    setInterval(() => {
      this.incrementTime();
    }, 1000);
  }

  updateTime(): void {
    // Marca que el tiempo fue ajustado manualmente
    this.manualAdjustment = true;
  }

  incrementTime(): void {
    if (!this.manualAdjustment) {
      // Incrementa los segundos si no hay ajuste manual
      this.userSecond++;
    }

    if (this.userSecond === 60) {
      this.userSecond = 0;
      this.userMinute++;
    }
    if (this.userMinute === 60) {
      this.userMinute = 0;
      this.userHour++;
    }
    if (this.userHour === 24) {
      this.userHour = 0;
    }

    // Una vez ajustado manualmente, retoma el flujo automático
    this.manualAdjustment = false;
  }

  getColor(value: number, max: number): string {
    const ratio = value / max;
    const red = Math.floor(255 * ratio);
    const green = Math.floor(255 * (1 - ratio));
    const blue = 128; // Valor constante para azul
    return `rgb(${red}, ${green}, ${blue})`;
  }

  formatTime(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
  
}
