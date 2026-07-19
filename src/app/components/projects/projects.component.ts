import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'BetterThanWindows OS',
      description: 'A custom operating system concept exploring kernel design, process management, and system utilities.',
      tech: ['C', 'Assembly', 'Linux'],
      github: 'https://github.com'
    },
    {
      title: 'Pac-Man AI',
      description: 'Classic Pac-Man game enhanced with pathfinding and decision-making algorithms for intelligent ghost behavior.',
      tech: ['Python', 'Pygame', 'AI'],
      github: 'https://github.com'
    },
    {
      title: 'SkyLine System',
      description: 'An integrated management system for tracking operations, resources, and reporting in a unified dashboard.',
      tech: ['Angular', 'Node.js', 'MongoDB'],
      github: 'https://github.com'
    },
    {
      title: 'Hospital Readmission Prediction',
      description: 'Machine learning model that predicts patient readmission risk to support better clinical decision-making.',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com'
    },
    {
      title: 'Thoth Gate LMS',
      description: 'A full-featured learning management system with course modules, assessments, and role-based access.',
      tech: ['Angular', 'ASP.NET', 'SQL Server'],
      github: 'https://github.com'
    }
  ];
}
