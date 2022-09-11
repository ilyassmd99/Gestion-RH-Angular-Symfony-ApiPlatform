import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  saveToken(token: string): void{
    localStorage.setItem('token',token)
    this.router.navigate(['admin'])
  }

  isLogged(): boolean{
    const token = localStorage.getItem('token')
    return !! token
  }
  cleartoken(): void{
    localStorage.removeItem('token')
    this.router.navigate(['auth'])
  }

  getToken(): string | null{
    return localStorage.getItem('token')
  }
}
