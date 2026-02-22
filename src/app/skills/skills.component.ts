import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  toolTipVisible: boolean = false;

  skillcards: SkillCard[] = [
    {
      title: 'Languages',
      skills : [
        {skill:'Java(DSA)', color: '#5e37d4', description: 'Used to develop reliable applications and backend systems' },
        {skill:'JavaScript', color: '#f7df1d', description: 'Adds dynamic functionality for websites and web applications' },
        {skill:'TypeScript', color: '#3178c6', description: 'JavaScript with added safety, for maintainable applications' },
        {skill:'HTML', color: '#eb6e34', description: 'Structuring and layout for web pages' },
        {skill:'CSS', color: '#9c3dcc', description: 'Adds styling and design to content' },
      ]
    },
    {
      title: 'Technologies',
      skills : [
        {skill:'Spring Boot', color: '#69ad3c', description: 'Java framework for building secure, scalable backend applications' },
        {skill:'Angular', color: '#c741da', description: 'Frontend framework for building dynamic, single-page web applications' },
        {skill:'MySQL', color: '#3e6e93', description: 'Relational database for storing and managing data' },
        {skill:'MongoDB', color: '#00ed64', description: 'NoSQL database for flexible and simplified data storage' },
        {skill:'Tailwind', color: '#00bcff', description: 'CSS framework for fast, responsive, modern UI design' },
      ]
    },
    {
      title: 'Tools',
      skills : [
        {skill:'Git', color: '#f34f29', description: 'Version control system for tracking code changes and collaboration' },
        {skill:'GitHub', color: '#d0a1ff', description: 'Hosts code repositories and managing team collaboration' },
        {skill:'Postman', color: '#ff6c37', description: 'Tool for testing, debugging and validating APIs during development' },
        {skill:'Figma', color: '#2dcd77', description: 'Design tool for creating UI/UX designs' },
        {skill:'Markdown', color: '#3178c6', description: 'Lightweight formating language for writing clean, structured documentation' },
        {skill:'Notion', color: '#ffffff', description: 'Workspace tool for documentation, planning and project management' },
      ]
    },
    {
      title: 'Additional Subjects',
      skills : [
        {skill:'System Design', color: '#d0a1ff', description: 'Designing software systems, scalable architectures and component interactions' },
        {skill:'Networking', color: '#484ABD', description: 'Basic networking concepts like HTTP, client-server communication and protocols' },
        {skill:'Operating Systems', color: '#99a1a6', description: 'Core OS concepts like processes, threads, memory and scheduling basics' },
        {skill:'OOPs', color: '#60A649', description: 'Practical use of Object Oriented principles while implementing application logic' },
      ]
    },
  ]
}

export interface SkillCard{
  title: string;
  skills: Skill[];
}
export interface Skill{
  skill: string;
  color: string;
  description: string;
}
