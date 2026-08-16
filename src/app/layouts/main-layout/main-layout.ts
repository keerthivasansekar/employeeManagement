import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../partials/header/header';
import { Sidenav } from '../partials/sidenav/sidenav';
import { Footer } from '../partials/footer/footer';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidenavService } from '../../core/services/sidenav/sidenav-service';

@Component({
  selector: 'app-main-layout',
  imports: [MatSidenavModule, MatListModule, Header, Sidenav, Footer, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  public sidenavService = inject(SidenavService);
}

