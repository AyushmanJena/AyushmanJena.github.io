import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  period: string;
  color: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Full Stack Developer Intern',
      company: 'NIELIT Bhubaneswar',
      period: 'August 2026 - Present',
      color: '#aec9f1',
      responsibilities: [
        'Built RAG based AI chatbot for NIELIT Bhubaneswar website for visitor support using Qwen 2.5 model',
        'Building Human Resource Management System for efficient tracking of leaves and allowances',
      ],
    },
    {
      title: 'Front-End Web Developer Intern',
      company: 'Tetrahedron Software Solutions',
      period: 'June 2025 - June 2026',
      color: '#dcccec',
      responsibilities: [
        'Contributed to the development of an Angular ERP application, web admin panels for an eCommerce platform and an educational mobile application for simplifying management',
        'Designed and developed dynamic dashboards, CRUD workflows and API integrations to support business operations',
      ],
    },
  ];
}
