import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

export const routes: Routes = [
  // Root path with no redirect - will be handled by app component for animation
  { path: '', pathMatch: 'full', children: [] },
  { 
    path: 'about', 
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
  },
  { 
    path: 'skills', 
    loadComponent: () => import('./components/skills/skills.component').then(m => m.SkillsComponent)
  },
  { 
    path: 'projects', 
    loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent)
  },
  { 
    path: 'education', 
    loadComponent: () => import('./components/education/education.component').then(m => m.EducationComponent)
  },
  { 
    path: 'experience', 
    loadComponent: () => import('./components/experience/experience.component').then(m => m.ExperienceComponent)
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent)
  },
  { path: '**', redirectTo: '' }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64] // [x, y] - adjust scroll offset if needed
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
