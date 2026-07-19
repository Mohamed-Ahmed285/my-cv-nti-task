import { Component } from '@angular/core';
import { profile } from '../../shared/profile';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year = new Date().getFullYear();
  name = profile.name;
}
