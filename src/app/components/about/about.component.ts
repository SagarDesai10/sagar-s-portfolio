import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModel } from '../../models/about.model';
import { ABOUT_DATA } from '../../data/about.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent {
  aboutData: AboutModel = ABOUT_DATA;
  exp : number;

  constructor()
  {
    const pastDate = new Date('2023-12-18');
    const currentDate = new Date();

    const yearDiff = currentDate.getFullYear() - pastDate.getFullYear();
    const monthDiff = currentDate.getMonth() - pastDate.getMonth();
    const dayDiff = currentDate.getDate() - pastDate.getDate();
    
    let totalMonths = yearDiff * 12 + monthDiff;
    if (dayDiff < 0) {
      totalMonths -= 1;
    }

    this.exp = +(totalMonths / 12).toFixed(2);

  }

}
