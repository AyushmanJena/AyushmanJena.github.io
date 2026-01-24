import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-projects',
  imports: [CommonModule],
  templateUrl: './mini-projects.component.html',
  styleUrl: './mini-projects.component.css'
})
export class MiniProjectsComponent {

  miniProjectList: MiniProjectData[] = [
    {
      title: "Color Memory",
      description: "Recreate the color as similar as possible",
      colorCode: "#4fd1c5",
      altColorCode: "#092725",
      svgFile: `<img src="mini-projects-svgs/color_lens.svg" alt="SVG Icon">`,
      toolsUsed: ['Angular'],
      liveUrl: "https://ayushmanjena.github.io/color-picker-game/",
    },
    {
      title: "Tic Tac Toe 2",
      description: "Only one person walks out, no tie!",
      colorCode: "#fdc700",
      altColorCode: "#221c07",
      svgFile: `<img src="mini-projects-svgs/grid.svg" alt="SVG Icon">`,
      toolsUsed: ['Angular', 'Tailwind CSS'],
      liveUrl: "https://ayushmanjena.github.io/tic-tac-toe/"
    },
    {
      title: "Project Generator",
      description: "Get an idea for a side project with design",
      colorCode: "#e6702f",
      altColorCode: "#231208",
      svgFile: `<img src="mini-projects-svgs/casino.svg" alt="SVG Icon">`,
      toolsUsed: ['Angular', 'Spring Boot', 'Gemini API'],
      liveUrl: "https://ayushmanjena.github.io/project-idea-generator/#/"
    },

  ]

}

export interface MiniProjectData{
  title: string;
  description: string;
  colorCode: string;
  altColorCode: string;
  svgFile: string;
  toolsUsed: string[];
  liveUrl: string;
}
