import { Component } from '@angular/core';
import { Developer } from '../model/developer.model';
import { Skill } from '../model/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent {
  developers: Developer[];

  developer1: Developer;
  developer2: Developer;
  developer3: Developer;
  developer4: Developer;

  constructor() {
    this.developers = [];
    this.developer1 = new Developer('ABBAS', 'Majdi', 34, 'Male', 'Student', [
      new Skill(
        'Angular',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
        'https://angular.io/'
      ),
      new Skill(
        'Spring',
        'https://www.vectorlogo.zone/logos/springio/springio-ar21.png',
        'https://spring.io/'
      ),
    ]);
    this.developer2 = new Developer(
      'ABBAS',
      'Mouhammad',
      40,
      'Male',
      'Student',
      [
        new Skill(
          'Angular',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
          'https://angular.io/'
        ),
        new Skill(
          'Spring',
          'https://www.vectorlogo.zone/logos/springio/springio-ar21.png',
          'https://spring.io/'
        ),
      ]
    );
    this.developer3 = new Developer('ABBAS', 'Nizar', 65, 'Male', 'Retraité', [
      new Skill(
        'Angular',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
        'https://angular.io/'
      ),
      new Skill(
        'Spring',
        'https://www.vectorlogo.zone/logos/springio/springio-ar21.png',
        'https://spring.io/'
      ),
    ]);
    this.developer4 = new Developer('ABBAS', 'Qamar', 37, 'Female', 'Student', [
      new Skill(
        'Angular',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
        'https://angular.io/'
      ),
      new Skill(
        'Spring',
        'https://www.vectorlogo.zone/logos/springio/springio-ar21.png',
        'https://spring.io/'
      ),
    ]);

    this.developers.push(this.developer1);
    this.developers.push(this.developer2);
    this.developers.push(this.developer3);
    this.developers.push(this.developer4);
  }
}
