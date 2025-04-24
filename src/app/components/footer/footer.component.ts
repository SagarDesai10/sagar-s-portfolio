import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModel } from 'src/app/models/about.model';
import { ABOUT_DATA } from 'src/app/data/about.data';
import { ContactInfoModel } from 'src/app/models/contact.model';
import { CONTACT_INFO_DATA } from 'src/app/data/contact.data';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class FooterComponent {
   aboutData: AboutModel = ABOUT_DATA;
   contactInfo: ContactInfoModel = CONTACT_INFO_DATA;
   currentYear: number = new Date().getFullYear();
   
   constructor(private router: Router) {
     // Subscribe to router events to scroll to top on navigation
     this.router.events.subscribe(event => {
       if (event instanceof NavigationEnd) {
         window.scrollTo(0, 0);
       }
     });
   }
   
   // Method to handle navigation with scroll to top
   navigateTo(route: string): void {
     this.router.navigateByUrl(route).then(() => {
       window.scrollTo(0, 0);
     });
   }
}
