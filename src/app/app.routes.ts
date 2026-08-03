import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectspageComponent } from './projectspage/projectspage.component';
import { InterestsPageComponent } from './interests-page/interests-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'projects',
    component: ProjectspageComponent
  },
  {
    path: 'interests',
    component: InterestsPageComponent
  }
];