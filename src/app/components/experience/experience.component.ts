import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceModel } from '../../models/experience.model';
import { EXPERIENCE_DATA } from '../../data/experience.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ExperienceComponent implements OnInit {
  experiences: ExperienceModel[] = EXPERIENCE_DATA;

  constructor() { }

  ngOnInit(): void {
  }
}
