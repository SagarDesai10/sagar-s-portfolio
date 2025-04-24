import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, Renderer2, ViewChildren, QueryList, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signature-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signature-animation.component.html',
  styleUrls: ['./signature-animation.component.scss']
})
export class SignatureAnimationComponent implements OnInit, AfterViewInit {
  @ViewChild('overlayElement') overlayElement!: ElementRef;
  @ViewChild('logoBadge') logoBadge!: ElementRef;
  @ViewChildren('letterS, letterA, letterG, letterA2, letterR, letterD, letterE, letterS2, letterA3, letterI') 
  letterElements!: QueryList<ElementRef>;
  
  @Output() animationComplete = new EventEmitter<void>();
  
  visible = false;
  animating = false;
  completed = false;
  
  // Define letter timing
  letterDelays = [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9, 1.0];
  
  // Mouse position for 3D effect
  private mouseX = 0;
  private mouseY = 0;
  
  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Initialize component
  }
  
  ngAfterViewInit(): void {
    // Set up logo badge click event
    if (this.logoBadge) {
      this.logoBadge.nativeElement.addEventListener('click', () => {
        this.finishAnimation();
      });
    }
  }
  
  /**
   * Track mouse position for 3D effect on logo
   */
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.completed || !this.logoBadge) return;
    
    // Only apply effect when animation is completed and logo is shown
    const badge = this.logoBadge.nativeElement;
    
    // Get center of the badge
    const rect = badge.getBoundingClientRect();
    const badgeCenterX = rect.left + rect.width / 2;
    const badgeCenterY = rect.top + rect.height / 2;
    
    // Calculate distance from mouse to center
    const distX = event.clientX - badgeCenterX;
    const distY = event.clientY - badgeCenterY;
    
    // Only apply effect when mouse is within reasonable distance
    const distance = Math.sqrt(distX * distX + distY * distY);
    if (distance < 200) {
      // Calculate rotation angles based on mouse position
      const rotateY = distX * 0.1; // horizontal movement affects Y rotation
      const rotateX = -distY * 0.1; // vertical movement affects X rotation
      
      // Apply 3D transform
      this.renderer.setStyle(badge, 'transform', 
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`);
    } else {
      // Reset transform when mouse is far away
      this.renderer.setStyle(badge, 'transform', 'rotateX(0) rotateY(0) scale(1)');
    }
  }
  
  /**
   * Make the overlay visible to prepare for animation
   */
  prepareAnimation(): void {
    // Make overlay visible immediately
    this.visible = true;
    this.completed = false;
    
    // Reset letters
    this.resetLetters();
  }
  
  /**
   * Reset the animation completely
   */
  resetAnimation(): void {
    this.visible = false;
    this.animating = false;
    this.completed = false;
    
    setTimeout(() => {
      this.resetLetters();
    }, 100);
  }
  
  /**
   * Reset all letters to initial state
   */
  private resetLetters(): void {
    if (!this.letterElements) return;
    
    const letters = this.letterElements.toArray();
    
    letters.forEach(el => {
      // Clear animation class and reset opacity
      this.renderer.removeClass(el.nativeElement, 'animated');
      this.renderer.setStyle(el.nativeElement, 'opacity', '0');
    });
    
    // Reset badge
    if (this.logoBadge) {
      this.renderer.removeClass(this.logoBadge.nativeElement, 'show');
      this.renderer.setStyle(this.logoBadge.nativeElement, 'transform', 'scale(0.5) rotateY(45deg)');
    }
  }
  
  /**
   * Play the animation sequence
   */
  playAnimation(): void {
    if (this.animating) return;
    
    this.animating = true;
    this.completed = false;
    
    // Animate letters with delay
    this.animateLetters();
  }
  
  /**
   * Animate all letters sequentially
   */
  private animateLetters(): void {
    const letters = this.letterElements.toArray();
    
    // Animate each letter with staggered timing
    letters.forEach((el, index) => {
      const delay = this.letterDelays[index] * 1000;
      
      setTimeout(() => {
        this.renderer.addClass(el.nativeElement, 'animated');
      }, delay);
    });
    
    // After letters animation, show the logo badge
    const totalLettersTime = Math.max(...this.letterDelays) + 0.6; // Animation duration
    
    setTimeout(() => {
      this.completed = true;
      
      // Show logo with hover effect
      if (this.logoBadge) {
        this.renderer.addClass(this.logoBadge.nativeElement, 'show');
      }
      
      // Wait a moment to show completed state - user can click logo to proceed
      setTimeout(() => {
        // Auto-proceed after 3 seconds if user doesn't click logo
        this.finishAnimation();
      }, 3000); // Show completed animation for 3 seconds
    }, totalLettersTime * 1000);
  }
  
  /**
   * Finish the animation and close overlay
   */
  finishAnimation(): void {
    if (!this.visible || !this.completed) return; // Prevent multiple calls
    
    this.visible = false;
    
    // When closing animation completes, reset and navigate
    setTimeout(() => {
      this.animating = false;
      this.completed = false;
      this.animationComplete.emit();
      
      // Reset for next time
      this.resetLetters();
      
      // Navigate to about page
      this.router.navigate(['/about']);
    }, 500); // Match the transition duration in CSS
  }
}
