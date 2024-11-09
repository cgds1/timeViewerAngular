// src/app/digital-clock/digital-clock.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class DigitalClockComponent implements OnInit {
  userHour: number = new Date().getHours() % 12 || 12;
  userMinute: number = new Date().getMinutes();
  userSecond: number = new Date().getSeconds();
  isPM: boolean = new Date().getHours() >= 12;
  isManual: boolean = false; // Indica si el usuario ha cambiado el tiempo

  ngOnInit(): void {
    setInterval(() => {
      this.incrementTime();
    }, 1000);
  }

  incrementTime() {
    // Incrementa los segundos y ajusta minutos, horas y AM/PM si es necesario
    this.userSecond++;
    if (this.userSecond >= 60) {
      this.userSecond = 0;
      this.userMinute++;
    }
    if (this.userMinute >= 60) {
      this.userMinute = 0;
      this.userHour++;
    }
    if (this.userHour > 12) {
      this.userHour = 1;
    }
    if (this.userHour === 12 && this.userMinute === 0 && this.userSecond === 0) {
      this.isPM = !this.isPM;
    }
  }

  onTimeChange() {
    // Activa el modo manual y configura el tiempo desde el nuevo valor del usuario
    this.isManual = true;
  }
}
