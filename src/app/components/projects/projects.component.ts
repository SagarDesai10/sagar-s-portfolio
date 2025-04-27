import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCategory, ProjectModel } from '../../models/project.model';
import { PROJECTS_DATA } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectsComponent {
  projects: ProjectModel[] = PROJECTS_DATA;
  categories = Object.values(ProjectCategory);
    
  activeCategory: ProjectCategory = ProjectCategory.BACKEND;
  
  setActiveCategory(category: ProjectCategory): void {
      this.activeCategory = category;
  }

  getProjectsByCategory(category: ProjectCategory): ProjectModel[] {
      return this.projects.filter(project => project.category === category);
    }
}
