import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DarkModeToggleComponent } from '../dark-mode-toggle/dark-mode-toggle.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, DarkModeToggleComponent]
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
    // Check initial scroll position
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  checkScroll() {
    // Check if the page is scrolled more than 50px
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }
}
