import { Component, OnInit, Renderer2, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DarkModeToggleComponent implements OnInit {
  isDarkMode = true;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Check local storage for theme preference
      const storedTheme = localStorage.getItem('theme');
      
      // Check system preference if no stored theme
      if (!storedTheme) {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDarkMode = prefersDarkMode;
      } else {
        this.isDarkMode = storedTheme === 'dark';
      }
      
      // Apply theme
      this.applyTheme();
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  private applyTheme(): void {
    if (this.isDarkMode) {
      this.renderer.addClass(document.documentElement, 'dark-mode');
      this.renderer.addClass(document.body, 'dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark-mode');
      this.renderer.removeClass(document.body, 'dark-mode');
      localStorage.setItem('theme', 'light');
    }
    
    // Ensure all relevant elements get the dark mode class
    const allSections = document.querySelectorAll('.section');
    allSections.forEach(section => {
      if (this.isDarkMode) {
        this.renderer.addClass(section, 'dark-mode');
      } else {
        this.renderer.removeClass(section, 'dark-mode');
      }
    });
  }
}
