// src/app/military-clock/military-clock.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-military-clock',
  templateUrl: './military-clock.component.html',
  styleUrls: ['./military-clock.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class MilitaryClockComponent implements OnInit {
  userHour: number = new Date().getHours();
  userMinute: number = new Date().getMinutes();
  userSecond: number = new Date().getSeconds();
  isManual: boolean = false; // Indica si el usuario ha cambiado el tiempo

  ngOnInit(): void {
    setInterval(() => {
      this.incrementTime();
    }, 1000);
  }

  incrementTime() {
    // Incrementa los segundos y ajusta minutos y horas en formato de 24 horas
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

  onTimeChange() {
    // Activa el modo manual y configura el tiempo desde el nuevo valor del usuario
    this.isManual = true;
  }
}
