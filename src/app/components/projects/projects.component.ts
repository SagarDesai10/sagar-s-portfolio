import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectModel } from '../../models/project.model';
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
  
  getFeaturedProjects(): ProjectModel[] {
    return this.projects.filter(project => project.featured);
  }
  
  getNonFeaturedProjects(): ProjectModel[] {
    return this.projects.filter(project => !project.featured);
  }
}
