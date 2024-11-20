import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-progress-clock',
  templateUrl: './progress-clock.component.html',
  styleUrls: ['./progress-clock.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class ProgressClockComponent {
  progressPercentage: string = '';
  timeText: string = '';
  userHour: number = new Date().getHours();
  userMinute: number = new Date().getMinutes();
  userSecond: number = new Date().getSeconds();
  manualAdjustment: boolean = false; // Indica si el usuario ajustó manualmente

  ngOnInit(): void {
    this.updateProgress();
    setInterval(() => {
      this.incrementTime(); // Incrementa siempre la hora
      this.updateProgress();
    }, 1000); // Actualización cada segundo
  }

  // Se ejecuta cuando el usuario ajusta la hora manualmente
  updateTime(): void {
    this.manualAdjustment = true; // Marca que el usuario ajustó manualmente
    this.updateProgress();
  }

  // Incrementa la hora, ya sea manual o automática
  incrementTime(): void {
    this.userSecond++;
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
    if (this.manualAdjustment) {
      this.updateProgress(); // Asegura que la hora manual también se actualice correctamente
    }
  }

  // Calcula el porcentaje del día transcurrido
  updateProgress(): void {
    const totalSecondsInDay = 24 * 60 * 60;
    const secondsElapsed =
      this.userHour * 3600 + this.userMinute * 60 + this.userSecond;

    this.progressPercentage = ((secondsElapsed / totalSecondsInDay) * 100).toFixed(2);
    this.timeText = this.formatTime(this.userHour, this.userMinute, this.userSecond);
  }

  // Formatea la hora como texto
  formatTime(hours: number, minutes: number, seconds: number): string {
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
}
