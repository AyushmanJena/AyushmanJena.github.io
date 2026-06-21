import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectspageComponent } from './projectspage/projectspage.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'projects',
    component: ProjectspageComponent
  }
];