import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
    steps: TimelineStep[] = [
    {
      title: 'Discovery & Requirement',
      icon: '💬',
      description:
        'Share your vision through our simple project form or schedule a free consultation call. We understand your business goals, target audience, and technical requirements thoroughly.',
      tags: [
        { icon: '📋', label: 'Project Form' },
        { icon: '📞', label: 'Free Consultation' },
        { icon: '📄', label: 'Requirement Doc' },
        { icon: '👤', label: 'Dedicated Manager' },
      ],
    },
    {
      title: 'Detailed Quotation',
      icon: '📑',
      description:
        'Receive a transparent, itemized quotation breaking down every feature, module, and deliverable with clear pricing. No hidden costs, no surprises — just honest pricing you can review and approve.',
      tags: [
        { icon: '📊', label: 'Itemized Breakdown' },
        { icon: '💰', label: 'Transparent Pricing' },
        { icon: '✅', label: 'Approve / Request Changes' },
        { icon: '📥', label: 'PDF Download' },
      ],
    },
    {
      title: 'Design & Prototyping',
      icon: '🎨',
      description:
        'Our designers craft wireframes and high-fidelity mockups aligned with your brand. You get interactive prototypes to review before any development begins.',
      tags: [
        { icon: '🖼️', label: 'Wireframes' },
        { icon: '🔗', label: 'Interactive Prototype' },
        { icon: '🎯', label: 'Brand Alignment' },
      ],
    },
    {
      title: 'Development & Delivery',
      icon: '🚀',
      description:
        'Agile sprints with regular updates and demo sessions. Full source code handover, deployment support, and post-launch assistance included.',
      tags: [
        { icon: '⚙️', label: 'Agile Sprints' },
        { icon: '💻', label: 'Source Code' },
        { icon: '🌐', label: 'Deployment Support' },
      ],
    },
  ];
}

interface TimelineStep {
  title: string;
  description: string;
  icon: string;
  tags: { icon: string; label: string }[];
}