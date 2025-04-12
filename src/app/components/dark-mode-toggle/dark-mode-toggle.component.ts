import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DarkModeToggleComponent implements OnInit {
  isDarkMode = true;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
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

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  private applyTheme(): void {
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }
}
