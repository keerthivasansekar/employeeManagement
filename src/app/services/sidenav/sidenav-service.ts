import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  isCollapsed = signal<boolean>(false);

  toggleSidenav() {
    this.isCollapsed.update((collapsed) => !collapsed);
  }

  setCollapsed(collapsed: boolean) {
    this.isCollapsed.set(collapsed);
  }
}

