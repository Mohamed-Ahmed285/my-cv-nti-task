import { Component } from '@angular/core';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = [
    {
      company: 'Digital Egypt Pioneers Initiative (DEPI)',
      role: 'Full Stack Developer',
      period: '2025',
      description:
        'Built responsive web applications using modern frontend and backend technologies as part of a national training program focused on industry-ready skills.'
    },
    {
      company: 'IACEGY Law Firm - Portfolio',
      role: 'Full Stack Developer',
      period: '2025–2026',
      description:
        'Developed and maintained internal web systems to streamline legal workflows, document management, and client communication.'
    },
    {
      company: 'Thoth Gate LMS',
      role: 'Full Stack Developer',
      period: '2025',
      description:
        'Contributed to a learning management platform with features for course delivery, student tracking, and administrative dashboards.'
    }
  ];
}
