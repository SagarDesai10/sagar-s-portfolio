import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillModel, SkillCategory } from '../../models/skill.model';
import { SKILLS_DATA } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent implements OnInit {
  skills: SkillModel[] = SKILLS_DATA;
  categories = Object.values(SkillCategory);
  
  activeCategory: SkillCategory = SkillCategory.BACKEND;

  constructor() { }

  ngOnInit(): void {
  }

  setActiveCategory(category: SkillCategory): void {
    this.activeCategory = category;
  }

  getSkillsByCategory(category: SkillCategory): SkillModel[] {
    return this.skills.filter(skill => skill.category === category);
  }
}
