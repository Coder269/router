import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/model/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  @Input()
  name: string = "";

  @Input()
  logo: string = "";

  @Input()
  site: string = "";

}
