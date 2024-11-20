import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roman-clock',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roman-clock.component.html',
  styleUrls: ['./roman-clock.component.css']
})
export class RomanClockComponent {
  userHour: number = new Date().getHours();
  userMinute: number = new Date().getMinutes();
  userSecond: number = new Date().getSeconds();

  romanNumerals: string[] = [
    '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'
  ];

  getRomanTime(): string {
    const romanHour = this.romanNumerals[this.userHour % 12 || 12];
    const romanMinute = this.convertToRoman(this.userMinute);
    const romanSecond = this.convertToRoman(this.userSecond);
    return `${romanHour}:${romanMinute}:${romanSecond}`;
  }

  convertToRoman(num: number): string {
    if (num === 0) return 'N'; // Representación de cero en romano
    const romanMapping = [
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' },
    ];
    let result = '';
    for (const { value, numeral } of romanMapping) {
      while (num >= value) {
        result += numeral;
        num -= value;
      }
    }
    return result;
  }

  updateTime() {
    setInterval(() => {
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
    }, 1000);
  }

  ngOnInit() {
    this.updateTime();
  }
}
