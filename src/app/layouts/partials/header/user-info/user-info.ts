import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../../../core/services/auth/auth-service';

@Component({
  selector: 'app-user-info',
  imports: [MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './user-info.html',
  styleUrl: './user-info.scss',
})
export class UserInfo {
  private authService = inject(AuthService);

  get userName(): string {
    const user = this.authService.currentUser();
    return user?.employeeName || user?.userName || user?.emailId || 'User';
  }

  onLogout(): void {
    this.authService.logout();
  }
}

