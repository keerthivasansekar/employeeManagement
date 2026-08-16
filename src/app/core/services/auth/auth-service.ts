import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { LoginRequest, UserData } from '../../models/interfaces/authModel';
import { ApiResponse } from '../../models/interfaces/apiResponseModel';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = environment.API_URL;

  public currentUser = signal<UserData | null>(this.getUserFromStorage());

  private getUserFromStorage(): UserData | null {
    const rawData = localStorage.getItem('user_data');
    if (!rawData) return null;
    try {
      return JSON.parse(rawData);
    } catch {
      return null;
    }
  }

  login(loginData: LoginRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}login`, loginData).pipe(
      tap((response: ApiResponse) => {
        if (response.result && response.data) {
          localStorage.setItem('user_data', JSON.stringify(response.data));
          this.currentUser.set(response.data);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('user_data');
    this.currentUser.set(null);
    this.router.navigate(['/auth/login']);
  }
}

