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

    this.timeText = `Son las ${hours} y ${minutes} minutos y ${seconds} segundos`;
  }

  formatToWords(value: number): string {
    return value === 0
      ? 'cero'
      : value.toLocaleString('es-ES', { minimumIntegerDigits: 2 });
  }
}
