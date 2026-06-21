import { Component } from '@angular/core';
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-homepage',
  imports: [HeroSectionComponent, SkillsComponent, ProjectsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
