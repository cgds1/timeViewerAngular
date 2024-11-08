// src/app/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly MAX_LENGTH = 16;
  private readonly MIN_LENGTH = 8;

  constructor() {}

  register(username: string, password: string): boolean {
    if (!this.validateUsername(username) || !this.validatePassword(password)) {
      return false;
    }
    localStorage.setItem(username, password);
    return true;
  }

  login(username: string, password: string): boolean {
    const storedPassword = localStorage.getItem(username);
    return storedPassword === password;
  }

  private validateUsername(username: string): boolean {
    return username.length > 0 &&
           username.length <= this.MAX_LENGTH &&
           !username.includes(' ');
  }

  private validatePassword(password: string): boolean {
    return password.length >= this.MIN_LENGTH &&
           password.length <= this.MAX_LENGTH;
  }
}
