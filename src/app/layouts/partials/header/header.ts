import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavService } from '../../../services/sidenav/sidenav-service';
import { UserInfo } from "./user-info/user-info";
@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, UserInfo],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public sidenavService = inject(SidenavService);
}

