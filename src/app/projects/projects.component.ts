import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageViewerService } from '../image-carousel/ImageViewerService';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor(
    private imageViewer: ImageViewerService,
  ) { }

  projectList: ProjectData[] = [
    {
      title: "Elytra Notes", description: "Read notes directly fetched from github repositories in your browser, with features like dark mode and markdown support.",
      toolsUsed: ['Angular', 'Github API', 'TailwindCSS'], githubUrl: "https://github.com/AyushmanJena/elytra-notes", liveUrl: "https://ayushmanjena.github.io/elytra-notes/", imageUrl:["/project-images/elytra_1.png", "/project-images/elytra_2.png", "/project-images/elytra_3.png", "/project-images/elytra_4.png", ]
    },
    {
      title: "BookVerse", description: "Online Book Catalogue, uses Python machine learning recommendation engine to recommend similar books.",
      toolsUsed: ['Spring Boot', 'Thymeleaf', 'MySQL'], githubUrl: "https://github.com/AyushmanJena/BookVerseDemo", liveUrl: "", imageUrl: ["/project-images/bookverse_1.png", "/project-images/bookverse_2.png", ]
    },
    {
      title: "Dr Crop", description: "BCA Group Project. Predict crop diseases, recommend medicines and recommends crops based on soil components. Additional features like email OTP authentication and pdf report generation.",
      toolsUsed: ['Spring Boot', 'Thymeleaf', 'MongoDB'], githubUrl: "https://github.com/AyushmanJena/drcrop", liveUrl: "", imageUrl: ["/project-images/drcrop_1.png"]
    },

  ];

  openGallery(imageUrls: string[]) {
    this.imageViewer.open(
      imageUrls,0
    );
  }

}

export interface ProjectData {
  title: string;
  description: string;
  toolsUsed: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string[];

}
