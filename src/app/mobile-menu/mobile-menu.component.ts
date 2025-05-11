import { Component } from '@angular/core';
import { MENU_ITEMS } from './models/menu-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.css'
})
export class MobileMenuComponent {
  menuItems = MENU_ITEMS;
  menuOpen = false; 
  activeMenu: string | null = null; // Track which menu is active

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
  
  toggleSubMenu(menuTitle: string): void {
    this.activeMenu = this.activeMenu === menuTitle ? null : menuTitle;
  }
}
