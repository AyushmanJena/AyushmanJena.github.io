import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectList: ProjectData[] = [
    {
      title: "BookVerse", description:"Online Book Catalogue, uses Python machine learning recommendation engine to recommend similar books.",
      toolsUsed: ['Spring Boot', 'Thymeleaf', 'MySQL'], githubUrl:"https://github.com/AyushmanJena/BookVerseDemo", liveUrl: "xyz", imageUrl:"/project-images/bookverse_screenshot.png"
    },
    {
      title: "Dr Crop", description:"BCA Group Project. Predict crop diseases, recommend medicines and recommends crops based on soil components. Additional features like email OTP authentication and pdf report generation.",
      toolsUsed: ['Spring Boot', 'Thymeleaf', 'MongoDB'], githubUrl:"https://github.com/AyushmanJena/drcrop", liveUrl: "xyz", imageUrl:"/project-images/drcrop_screenshot.png"
    },
    {
      title: "Youtube Comments Analyzer", description:"Analyze youtube videos or entire playlists from its comments and generates a summary if the content is worthwhile.",
      toolsUsed: ['Spring Boot', 'Thymeleaf', 'Gemini API', 'Youtube API'], githubUrl:"https://github.com/AyushmanJena/Youtube-comments-analyzer", liveUrl: "xyz", imageUrl:"/project-images/youtube_screenshot.png"
    },

  ]
}

export interface ProjectData{
  title: string;
  description: string;
  toolsUsed: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;

}
