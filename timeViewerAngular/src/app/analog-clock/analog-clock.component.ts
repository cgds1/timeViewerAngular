// src/app/analog-clock/analog-clock.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]  
})

export class AnalogClockComponent implements OnInit {
  hourDeg = 0;
  minuteDeg = 0;
  secondDeg = 0;

  // Valores ajustables por el usuario
  userHour = new Date().getHours();
  userMinute = new Date().getMinutes();
  userSecond = new Date().getSeconds();

  isManual = false;  // Indica si el usuario ha modificado el tiempo manualmente

  // Números del reloj
  hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  ngOnInit(): void {
    this.updateClock();
    setInterval(() => {
      if (!this.isManual) {
        this.setSystemTime();
      } else {
        this.incrementTime();
      }
      this.updateClock();
    }, 1000);  // Actualizar cada segundo
  }

  // Método para configurar la hora desde la computadora
  setSystemTime() {
    const now = new Date();
    this.userHour = now.getHours();
    this.userMinute = now.getMinutes();
    this.userSecond = now.getSeconds();
  }

  // Incrementa el tiempo manualmente
  incrementTime() {
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
  }

  // Actualiza las posiciones de las agujas
  updateClock() {
    this.secondDeg = this.userSecond * 6;
    this.minuteDeg = this.userMinute * 6 + this.secondDeg / 60;
    this.hourDeg = (this.userHour % 12) * 30 + this.minuteDeg / 12;
  }

  // Método que se ejecuta cuando el usuario ajusta la hora
  onTimeChange() {
    this.isManual = true;  // Cambia a manual al hacer un ajuste
    this.updateClock();
  }
}
