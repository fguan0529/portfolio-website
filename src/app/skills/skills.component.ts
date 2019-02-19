import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillLabel1 = 'User Research, Interviews & Testing';
  skillIconSrc1 = '../../assets/img/photo.jpg';

  skillLabel2 = 'Design Mockups & Wireframes';
  skillIconSrc2 = '../../assets/img/photo.jpg';

  skillLabel3 = 'High Fidelity Prototypes';
  skillIconSrc3 = '../../assets/img/photo.jpg';

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
