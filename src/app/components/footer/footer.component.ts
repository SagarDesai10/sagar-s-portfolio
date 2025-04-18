import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModel } from 'src/app/models/about.model';
import { ABOUT_DATA } from 'src/app/data/about.data';
import { ContactInfoModel } from 'src/app/models/contact.model';
import { CONTACT_INFO_DATA } from 'src/app/data/contact.data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [CommonModule,RouterModule]
})
export class FooterComponent {
   aboutData: AboutModel = ABOUT_DATA;
   contactInfo: ContactInfoModel = CONTACT_INFO_DATA;
   currentYear: number = new Date().getFullYear();
}
