import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../../services/auth/auth-service';
import { LoginRequest } from '../../../models/authModel';
import { ApiResponse } from '../../../models/apiResponseModel';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  loginForm: FormGroup;
  hidePassword = true;
  isLoading = false;
  errorMessage = '';

  constructor() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.isLoading = true;
    this.errorMessage = '';

    const payload: LoginRequest = {
      userName: this.loginForm.value.userName,
      password: this.loginForm.value.password,
    };

    this.authService.login(payload).subscribe({
      next: (response: ApiResponse) => {
        this.isLoading = false;
        if (response.result) {
          if (response.data) {
            localStorage.setItem('user_data', JSON.stringify(response.data));
          }
          this.snackBar.open(response.message || 'Login successful!', 'Close', {
            duration: 3000,
          });
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.errorMessage = response.message || 'Authentication failed. Please check your credentials.';
          this.snackBar.open(this.errorMessage, 'Close', { duration: 4000 });
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.Message || err?.message || 'An error occurred during login. Please try again.';
        this.snackBar.open(this.errorMessage, 'Close', { duration: 4000 });
      },
    });
  }
}


