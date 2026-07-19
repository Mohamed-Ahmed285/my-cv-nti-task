import { Component } from '@angular/core';

interface SkillGroup {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    { category: 'Languages', items: ['JavaScript', 'Python', 'C#', 'C++', 'SQL', 'C'] },
    { category: 'Frameworks', items: ['Angular', 'React', 'Vue JS',  'ASP.NET Core', 'Node.js'] },
    { category: 'Backend', items: ['REST APIs', 'Express', 'Entity Framework'] },
    { category: 'Databases', items: ['Orcal DB', 'MongoDB', 'SQL Server', 'MySQL'] },
    { category: 'Tools', items: ['Git', 'Swagger', 'VS Code', 'Postman', 'Figma'] }
  ];
}
