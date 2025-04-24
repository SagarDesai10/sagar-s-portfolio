import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThreeSceneComponent } from './components/three-scene/three-scene.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent, ThreeSceneComponent]
})
export class AppComponent {
  title = 'Sagar\'s Portfolio';
  @ViewChild(RouterOutlet) outlet!: RouterOutlet;
  
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Scroll to top immediately with no animation
        // This ensures the page starts at the top when navigating
        window.scrollTo(0, 0);
        
        // Ensure the document body and HTML element are scrolled to top as well
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
  }
  
  // Reset scroll position when route changes
  onActivate(event: any) {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
