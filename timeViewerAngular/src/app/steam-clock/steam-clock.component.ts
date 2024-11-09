// src/app/steam-clock/steam-clock.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-steam-clock',
  templateUrl: './steam-clock.component.html',
  styleUrls: ['./steam-clock.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class SteamClockComponent implements OnInit {
  userHour: number = new Date().getHours();
  userMinute: number = new Date().getMinutes();
  userSecond: number = new Date().getSeconds();
  isManual: boolean = false;

  ngOnInit(): void {
    setInterval(() => {
      if (!this.isManual) {
        this.incrementTime();
      }
    }, 1000);  // Actualiza cada segundo
  }

  incrementTime() {
    this.userSecond++;
    if (this.userSecond >= 60) {
      this.userSecond = 0;
      this.userMinute++;
      if (this.userMinute >= 60) {
        this.userMinute = 0;
        this.userHour = (this.userHour + 1) % 24; 
      }
    }
  }

  onTimeChange() {
    this.isManual = true;
    setTimeout(() => {
      this.isManual = false;
    }, 1000);
  }
}
