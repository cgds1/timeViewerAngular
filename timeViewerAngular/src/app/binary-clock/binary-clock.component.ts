import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binary-clock',
  templateUrl: './binary-clock.component.html',
  styleUrls: ['./binary-clock.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class BinaryClockComponent {
  userHour: number = new Date().getHours();
  userMinute: number = new Date().getMinutes();
  userSecond: number = new Date().getSeconds();
  manualAdjustment: boolean = false; // Indica si el usuario ajustó manualmente

  ngOnInit(): void {
    setInterval(() => {
      this.incrementTime(); // Incrementa el tiempo, respetando ajustes manuales
    }, 1000); // Actualiza cada segundo
  }

  // Se ejecuta cuando el usuario ajusta la hora manualmente
  updateTime(): void {
    this.manualAdjustment = true; // Marca que el usuario ajustó manualmente
  }

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
  }

  toBinary(value: number): string {
    return value.toString(2).padStart(8, '0'); // Convierte a binario con 8 dígitos
  }
}
