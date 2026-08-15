import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SidenavService } from '../../../services/sidenav/sidenav-service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, MatListModule, MatIconModule, MatTooltipModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
})
export class Sidenav {
  public sidenavService = inject(SidenavService);

  public navItems = [
    { label: 'Dashboard', icon: 'dashboard', route: '/admin/dashboard' },
    { label: 'Employees', icon: 'people', route: '/admin/employees' },
    { label: 'Departments', icon: 'business', route: '/admin/departments' },
    { label: 'Settings', icon: 'settings', route: '/admin/settings' },
  ];
}

