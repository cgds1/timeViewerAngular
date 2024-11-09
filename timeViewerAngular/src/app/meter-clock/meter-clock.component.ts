// src/app/meter-clock/meter-clock.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meter-clock',
  templateUrl: './meter-clock.component.html',
  styleUrls: ['./meter-clock.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class MeterClockComponent implements OnInit {
  userHour: number = new Date().getHours() % 12 || 12; // Formato de 12 horas
  userMinute: number = new Date().getMinutes();
  userSecond: number = new Date().getSeconds();
  isManual: boolean = false;
  isPM: boolean = new Date().getHours() >= 12; // Determina si es AM o PM

  ngOnInit(): void {
    setInterval(() => {
      if (!this.isManual) {
        this.incrementTime();
      }
    }, 1000);  // Actualiza cada segundo
  }

  incrementTime() {
    // Incrementa los segundos y ajusta los minutos y horas según sea necesario
    this.userSecond++;
    if (this.userSecond >= 60) {
      this.userSecond = 0;
      this.userMinute++;
      if (this.userMinute >= 60) {
        this.userMinute = 0;
        this.userHour = (this.userHour % 12) + 1;
        if (this.userHour === 12) {
          this.isPM = !this.isPM; // Cambia de AM a PM o viceversa cada 12 horas
        }
      }
    }
  }

  onTimeChange() {
    this.isManual = true;
    // Restablece el tiempo automático después de un ajuste manual
    setTimeout(() => {
      this.isManual = false;
    }, 1000);
  }
}
