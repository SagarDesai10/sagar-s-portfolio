import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementModel, CertificationModel, EducationModel } from '../../models/education.model';
import { ACHIEVEMENTS_DATA, CERTIFICATIONS_DATA, EDUCATION_DATA } from '../../data/education.data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class EducationComponent implements OnInit {
  education: EducationModel[] = EDUCATION_DATA;
  certifications: CertificationModel[] = CERTIFICATIONS_DATA;
  achievements: AchievementModel[] = ACHIEVEMENTS_DATA;

  constructor() { }

  ngOnInit(): void {
  }
}
