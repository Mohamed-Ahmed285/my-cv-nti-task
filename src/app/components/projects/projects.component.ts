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
      tech: ['C'],
      github: 'https://github.com/Mohamed-Ahmed285/BetterThanWindows-OS'
    },
    {
      title: 'Pac-Man AI',
      description: 'Classic Pac-Man game enhanced with pathfinding and decision-making algorithms for intelligent ghost behavior.',
      tech: ['CPP', 'Console Game', 'AI' , 'SFML'],
      github: 'https://github.com/Mohamed-Ahmed285/PacMan'
    },
    {
      title: 'SkyLine System',
      description: 'An integrated management system for tracking operations, resources, and reporting in a unified dashboard.',
      tech: ['Java', 'Json', 'Java-Fx'],
      github: 'https://github.com/Mohamed-Ahmed285/SkyLine-system'
    },
    {
      title: 'Hospital Readmission Prediction',
      description: 'Machine learning model that predicts patient readmission risk to support better clinical decision-making.',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/Mohamed-Ahmed285/hospital-readmission-prediction'
    },
    {
      title: 'Thoth Gate LMS',
      description: 'A full-featured learning management system with course modules, assessments, and role-based access.',
      tech: ['React', 'Laravel', 'SQL Server'],
      github: 'https://github.com/Mohamed-Ahmed285/Thoth-Gate-1.1'
    }
  ];
}
