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
  
  constructor(private router: Router, private route: ActivatedRoute) {
    
  }
  
  ngOnInit() {
    // Check current route on initial load
    this.router.events
    .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      const currentRoute = event.urlAfterRedirects || event.url;
      // console.log("current route",currentRoute);
      if (currentRoute === '/') {
        console.log('Setting showInitialAnimation to true');
        this.showInitialAnimation = true;
      } 
    }); 
  }
  
  ngAfterViewInit() {
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
