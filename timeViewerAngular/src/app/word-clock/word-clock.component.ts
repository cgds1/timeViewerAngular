import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-word-clock',
  templateUrl: './word-clock.component.html',
  styleUrls: ['./word-clock.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class WordClockComponent {
  timeText: string = '';
  userHour: number = new Date().getHours();
  userMinute: number = new Date().getMinutes();
  userSecond: number = new Date().getSeconds();

  private numbersInWords: string[] = [
    'cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez',
    'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte',
    'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve',
    'treinta', 'treinta y uno', 'treinta y dos', 'treinta y tres', 'treinta y cuatro', 'treinta y cinco',
    'treinta y seis', 'treinta y siete', 'treinta y ocho', 'treinta y nueve', 'cuarenta', 'cuarenta y uno',
    'cuarenta y dos', 'cuarenta y tres', 'cuarenta y cuatro', 'cuarenta y cinco', 'cuarenta y seis', 'cuarenta y siete',
    'cuarenta y ocho', 'cuarenta y nueve', 'cincuenta', 'cincuenta y uno', 'cincuenta y dos', 'cincuenta y tres',
    'cincuenta y cuatro', 'cincuenta y cinco', 'cincuenta y seis', 'cincuenta y siete', 'cincuenta y ocho', 'cincuenta y nueve'
  ];

  ngOnInit(): void {
    this.updateTimeText();
    setInterval(() => {
      this.incrementTime();
      this.updateTimeText();
    }, 1000);
  }

  updateTime(): void {
    this.updateTimeText();
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

  updateTimeText(): void {
    const hours = this.formatToWords(this.userHour);
    const minutes = this.formatToWords(this.userMinute);
    const seconds = this.formatToWords(this.userSecond);

    this.timeText = `Son las ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
  }

  formatToWords(value: number): string {
    return this.numbersInWords[value];
  }
}
