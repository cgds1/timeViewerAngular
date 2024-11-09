// src/app/hourglass-clock/hourglass-clock.component.ts
import { Component, OnInit, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hourglass-clock',
  templateUrl: './hourglass-clock.component.html',
  styleUrls: ['./hourglass-clock.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class HourglassClockComponent implements OnInit {
  userHour: number = new Date().getHours();
  userMinute: number = new Date().getMinutes();
  userSecond: number = new Date().getSeconds();
  isDragging: boolean = false;
  initialY: number = 0;
  selectedUnit: 'hour' | 'minute' | 'second' | null = null;

  ngOnInit(): void {
    setInterval(() => {
      this.incrementTime();
      this.logCurrentTime();  // Registrar el tiempo actual en la consola
    }, 1000);
  }

  incrementTime() {
    // Incrementa el tiempo y ajusta en función de horas, minutos y segundos
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

  startDragging(event: MouseEvent, unit: 'hour' | 'minute' | 'second') {
    this.isDragging = true;
    this.initialY = event.clientY;
    this.selectedUnit = unit;
  }

  stopDragging() {
    this.isDragging = false;
    this.selectedUnit = null;
  }

  @HostListener('document:mousemove', ['$event'])
  onDrag(event: MouseEvent) {
    if (this.isDragging && this.selectedUnit) {
      const deltaY = this.initialY - event.clientY;
      if (Math.abs(deltaY) > 5) {  // Solo aplicar cambios si el arrastre es significativo
        if (this.selectedUnit === 'hour') {
          this.userHour = (this.userHour + (deltaY > 0 ? 1 : -1) + 24) % 24;
        } else if (this.selectedUnit === 'minute') {
          this.userMinute = (this.userMinute + (deltaY > 0 ? 1 : -1) + 60) % 60;
        } else if (this.selectedUnit === 'second') {
          this.userSecond = (this.userSecond + (deltaY > 0 ? 1 : -1) + 60) % 60;
        }
        this.initialY = event.clientY;  // Actualizar la posición inicial
        this.logCurrentTime();  // Registrar el tiempo actualizado al arrastrar
      }
    }
  }

  // Método para registrar el tiempo actual en la consola
  logCurrentTime() {
    console.log(`Current Time - Hours: ${this.userHour}, Minutes: ${this.userMinute}, Seconds: ${this.userSecond}`);
  }
}
