import { Component } from '@angular/core';
import { profile } from '../../shared/profile';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  profile = profile;
}
