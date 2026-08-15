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

  // THIS IS THE PROJECTS COMPONENT IN THE HOMEPAGE
  constructor(
    private imageViewer: ImageViewerService,
  ) { }

  projectList: ProjectData[] = [
    {
      title: "Elytra Notes", description: "Read notes directly fetched from github repositories in your browser, with features like dark mode and markdown support.",
      toolsUsed: ['Angular', 'Github API', 'TailwindCSS'], githubUrl: "https://github.com/AyushmanJena/elytra-notes", liveUrl: "https://ayushmanjena.github.io/elytra-notes/", imageUrl:["/project-images/elytra_1.png", "/project-images/elytra_2.png", "/project-images/elytra_3.png", "/project-images/elytra_4.png", ]
    },
    {
      title: "Ecommerce Simplified", description: "A eCommerce platform template built for small businesses, with product management, order processing, Razorpay payments, and a dedicated admin panel.",
      toolsUsed: ['Angular', 'Spring Boot', 'PostgreSQL', 'Razorpay', 'TailwindCSS'], githubUrl: "https://github.com/AyushmanJena/candle-app-fe", liveUrl: "https://ayushmanjena.github.io/candle-app-fe/", imageUrl: ["/project-images/eCommerce_1.png", "/project-images/eCommerce_2.png", "/project-images/eCommerce_3.png",  "/project-images/eCommerce_4.png",  "/project-images/eCommerce_5.png",  ]
    },
    {
      title: "Dr Crop", description: "BCA Group Project. Predict crop diseases, recommend medicines and recommends crops based on soil components. Additional features like email OTP authentication and pdf report generation.",
      toolsUsed: ['Spring Boot', 'Thymeleaf', 'MongoDB'], githubUrl: "https://github.com/AyushmanJena/drcrop", liveUrl: "", imageUrl: ["/project-images/drcrop_1.png","/project-images/drcrop_2.png", "/project-images/drcrop_3.png", "/project-images/drcrop_4.png", "/project-images/drcrop_5.png", "/project-images/drcrop_6.png", ]
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
