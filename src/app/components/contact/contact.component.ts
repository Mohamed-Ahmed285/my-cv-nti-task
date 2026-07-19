import { Component } from '@angular/core';
import { profile } from '../../shared/profile';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  profile = profile;

  links = [
    { label: 'Email', href: 'mailto:' + profile.email },
    { label: 'GitHub', href: profile.github },
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'Portfolio', href: profile.portfolio },
    // { label: 'Resume Download', href: profile.resumeUrl }
  ];
}
