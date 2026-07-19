import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  certificates = [
    'Meta - Full Stack Development course',
    'IBM - SQL & Relational Databases',
    'DEPI - Full Stack .NET Diploma',
    'Berlitz - Business English',
    'Eyouth - Business Intelligence Diploma'
  ];
}
