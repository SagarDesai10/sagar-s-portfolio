import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, isDevMode } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThreeSceneComponent } from './components/three-scene/three-scene.component';
import { SignatureAnimationComponent } from './components/signature-animation/signature-animation.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    HeaderComponent, 
    FooterComponent, 
    ThreeSceneComponent,
    SignatureAnimationComponent
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Sagar\'s Portfolio';
  @ViewChild(RouterOutlet) outlet!: RouterOutlet;
  @ViewChild(SignatureAnimationComponent) signatureAnimation!: SignatureAnimationComponent;
  showInitialAnimation = false;
  
  // Valid routes in the application
  validRoutes: string[] = ['/', '/about', '/skills', '/projects', '/education', '/contact'];
  
  constructor(private router: Router, private route: ActivatedRoute) {
    // Set an immediate flag to detect page refresh
    // This timestamp identifies a new session, different from a page refresh
    if (!sessionStorage.getItem('initialLoadTimestamp')) {
      // New browser session - store timestamp
      sessionStorage.setItem('initialLoadTimestamp', Date.now().toString());
      console.log('Initial app load (new session)');
    } else {
      // This is a page refresh, not an initial visit
      console.log('This is a page refresh, not a new session');
      sessionStorage.setItem('isRefresh', 'true');
    }
    
    // For testing in dev mode
    if (isDevMode()) {
      console.log('Development mode: clearing visitedBefore flag for testing');
      localStorage.removeItem('visitedBefore');
    }
    
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log('Navigation event:', event.url, event.urlAfterRedirects);
        
        const currentRoute = event.urlAfterRedirects || event.url;
        const isValidRoute = this.validRoutes.includes(currentRoute);
        const hasVisited = localStorage.getItem('visitedBefore') === 'true';
        const isRefresh = sessionStorage.getItem('isRefresh') === 'true';
        
        console.log('Route check:', { currentRoute, isValidRoute, hasVisited, isRefresh });
        
        // NEVER show animation on page refresh
        if (isRefresh) {
          console.log('Skipping animation because this is a page refresh');
          
          // If it's an invalid route, just redirect
          if (!isValidRoute) {
            console.log('Invalid route on refresh - redirecting to /about');
            this.router.navigate(['/about']);
          }
          return;
        }
        
        // CASES TO SHOW ANIMATION:
        // 1. Root route (first visit only)
        // 2. Invalid route (first visit only)
        if ((currentRoute === '/' || !isValidRoute) && !hasVisited) {
          console.log('Will show animation (first visit to / or invalid route)');
          
          // Set the flag for future visits
          localStorage.setItem('visitedBefore', 'true');
          
          if (this.signatureAnimation) {
            // Animation component is already available
            this.signatureAnimation.prepareAnimation();
            setTimeout(() => {
              this.signatureAnimation.playAnimation();
            }, 100);
          } else {
            // Mark for playing when component is available
            this.showInitialAnimation = true;
          }
        } 
        // CASE: Invalid route but not first visit - redirect immediately
        else if (!isValidRoute && hasVisited) {
          console.log('Invalid route (not first visit) - redirecting to /about');
          this.router.navigate(['/about']);
        }
        
        // Always scroll to top on navigation
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
  }
  
  ngOnInit() {
    // Check current route on initial load
    const currentRoute = this.router.url;
    const isValidRoute = this.validRoutes.includes(currentRoute);
    const hasVisited = localStorage.getItem('visitedBefore') === 'true';
    const isRefresh = sessionStorage.getItem('isRefresh') === 'true';
    
    console.log('Initial load:', { currentRoute, isValidRoute, hasVisited, isRefresh });
    
    // NEVER show animation on refresh
    if (isRefresh) {
      console.log('Skipping animation on init because this is a page refresh');
      sessionStorage.removeItem('isRefresh'); // Reset for next navigation
      
      // If it's an invalid route, just redirect
      if (!isValidRoute) {
        console.log('Invalid route on refresh init - redirecting to /about');
        this.router.navigate(['/about']);
      }
      return;
    }
    
    // Show animation on first visit to root or invalid route
    if ((currentRoute === '/' || !isValidRoute) && !hasVisited) {
      console.log('Setting showInitialAnimation to true');
      this.showInitialAnimation = true;
      localStorage.setItem('visitedBefore', 'true');
    } 
    // Redirect invalid routes on non-first visits
    else if (!isValidRoute && hasVisited) {
      console.log('Invalid route on init - redirecting to /about');
      this.router.navigate(['/about']);
    }
  }
  
  ngAfterViewInit() {
    // Play animation if marked for showing and NOT a refresh
    const isRefresh = sessionStorage.getItem('isRefresh') === 'true';
    
    if (isRefresh) {
      console.log('Skipping animation in afterViewInit because this is a page refresh');
      sessionStorage.removeItem('isRefresh'); // Reset for future navigations
      return;
    }
    
    setTimeout(() => {
      if (this.showInitialAnimation && this.signatureAnimation) {
        console.log('Playing animation from afterViewInit');
        this.signatureAnimation.prepareAnimation();
        
        setTimeout(() => {
          this.signatureAnimation.playAnimation();
        }, 100);
        
        this.showInitialAnimation = false;
      }
    }, 200);
  }
  
  // Always play animation when logo is clicked
  playSignatureAnimation() {
    console.log('Logo clicked - playing animation');
    if (this.signatureAnimation) {
      // Clear animation state
      this.signatureAnimation.resetAnimation();
      
      // Start new animation
      setTimeout(() => {
        this.signatureAnimation.prepareAnimation();
        setTimeout(() => {
          this.signatureAnimation.playAnimation();
        }, 100);
      }, 50);
    }
  }
  
  // Reset scroll position when route changes
  onActivate(event: any) {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
