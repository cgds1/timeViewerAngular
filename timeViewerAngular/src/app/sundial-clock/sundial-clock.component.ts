// src/app/sundial-clock/sundial-clock.component.ts
import { Component, OnInit, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sundial-clock',
  templateUrl: './sundial-clock.component.html',
  styleUrls: ['./sundial-clock.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class SundialClockComponent implements OnInit {
  userHour: number = new Date().getHours();
  userMinute: number = new Date().getMinutes();
  userSecond: number = new Date().getSeconds();
  shadowAngle: number = 0;
  isManual: boolean = false;

  ngOnInit(): void {
    this.updateShadowAngle();
    setInterval(() => {
      if (!this.isManual) {
        this.incrementTime();
      }
    }, 1000);  // Actualiza cada segundo
  }

  incrementTime() {
    // Incrementa los segundos y ajusta los minutos y las horas si es necesario
    this.userSecond++;
    if (this.userSecond >= 60) {
      this.userSecond = 0;
      this.userMinute++;
      if (this.userMinute >= 60) {
        this.userMinute = 0;
        this.userHour = (this.userHour + 1) % 24;
      }
    }
    this.updateShadowAngle();
  }

  updateShadowAngle() {
    // Calcula el ángulo de la sombra en función de las horas, minutos y segundos
    const hourInDegrees = (this.userHour % 12) * 30; // 12 horas = 360 grados
    const minuteInDegrees = (this.userMinute / 60) * 30;
    const secondInDegrees = (this.userSecond / 60) * 0.5; // Cada segundo = 0.5 grados
    this.shadowAngle = hourInDegrees + minuteInDegrees + secondInDegrees;
  }

  onTimeChange() {
    this.isManual = true;
    this.updateShadowAngle();

    // Reinicia el tiempo automático desde el nuevo tiempo configurado
    setTimeout(() => {
      this.isManual = false;
    }, 1000);
  }
}
