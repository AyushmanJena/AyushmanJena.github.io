import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectData } from '../projects/projects.component';
import { ImageViewerService } from '../image-carousel/ImageViewerService';

@Component({
  selector: 'app-projectspage',
  imports: [CommonModule],
  templateUrl: './projectspage.component.html',
  styleUrl: './projectspage.component.css'
})
export class ProjectspageComponent {

  constructor(
    private imageViewer: ImageViewerService,
  ) { }

  projectList: ProjectData[] = [
    {
      title: "Elytra Notes", description:"Read notes directly fetched from github repositories in your browser, with features like dark mode and markdown support.",
      toolsUsed: ['Angular', 'Github API', 'TailwindCSS'], githubUrl:"https://github.com/AyushmanJena/elytra-notes", liveUrl: "https://ayushmanjena.github.io/elytra-notes/", imageUrl:["/project-images/elytra_1.png", "/project-images/elytra_2.png", "/project-images/elytra_3.png", "/project-images/elytra_4.png", ]
    },
    {
      title: "BookVerse", description:"Online Book Catalogue, uses Python machine learning recommendation engine to recommend similar books.",
      toolsUsed: ['Spring Boot', 'Thymeleaf', 'MySQL'], githubUrl:"https://github.com/AyushmanJena/BookVerseDemo", liveUrl: "", imageUrl:["/project-images/bookverse_1.png", "/project-images/bookverse_2.png", ]
    },
    {
      title: "Dr Crop", description:"BCA Group Project. Predict crop diseases, recommend medicines and recommends crops based on soil components. Additional features like email OTP authentication and pdf report generation.",
      toolsUsed: ['Spring Boot', 'Thymeleaf', 'MongoDB'], githubUrl:"https://github.com/AyushmanJena/drcrop", liveUrl: "", imageUrl:["/project-images/drcrop_1.png"]
    },
    {
      title: "Project Idea Generator", description:"Generate Project Idea based on a random roll and get project architecture and overview based on your tech stack and interests.",
      toolsUsed: ['Spring Boot', 'Angular', 'Gemini API'], githubUrl:"https://github.com/AyushmanJena/project-idea-generator", liveUrl: "https://ayushmanjena.github.io/project-idea-generator/", imageUrl:["/project-images/projectidea_1.png"]
    },
    {
      title: "Infinite Tic Tac Toe", description:"Infinite moves tic tac toe game, with last moves being removed and more strategic gameplay. Additional bots or player modes.",
      toolsUsed: ['Angular'], githubUrl:"https://github.com/AyushmanJena/tic-tac-toe", liveUrl: "https://ayushmanjena.github.io/tic-tac-toe/", imageUrl:["/project-images/tictactoe_1.png"]
    },
    {
      title: "Youtube Comments Analyzer", description:"Analyze youtube videos or entire playlists from its comments and generates a summary if the content is worthwhile.",
      toolsUsed: ['Spring Boot', 'Thymeleaf', 'Gemini API', 'Youtube API'], githubUrl:"https://github.com/AyushmanJena/Youtube-comments-analyzer", liveUrl: "", imageUrl:["/project-images/youtube_1.png"]
    },
    {
      title: "Color Memory Game", description:"Recreate the color from memory as similar as possible.",
      toolsUsed: ['Angular'], githubUrl:"https://github.com/AyushmanJena/color-picker-game", liveUrl: "https://ayushmanjena.github.io/color-picker-game/", imageUrl:["/project-images/colormemory_1.png"]
    },

  ]

  openGallery(imageUrls: string[]) {
    this.imageViewer.open(
      imageUrls,0
    );
  }
}