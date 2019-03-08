import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillLabel1 = 'User Research, Interviews & Testing';
  skillIconSrc1 = './assets/img/userresearch.svg';

  skillLabel2 = 'Design Mockups & Wireframes';
  skillIconSrc2 = './assets/img/mockup.svg';

  skillLabel3 = 'High Fidelity Prototypes';
  skillIconSrc3 = './assets/img/prototype.svg';

  skillIconSrc4 = './assets/img/code.svg';

  codingSkills: string[] = [
    'HTML',
    'CSS \\ Sass',
    'JavaScript \\ TypeScript \\ Angular',
    'SQL',
    'Python \\ Flask',
    'C \\ C++',
    'Java'
  ];

  toolsSkills: string[] = [
    'Git',
    'InVision',
    'Balsamiq',
    'Webflow',
    'Wix',
    'WordPress',
    'Adobe Photoshop \\ Lightroom'
  ];

  constructor() { }

  ngOnInit() {
  }

}
