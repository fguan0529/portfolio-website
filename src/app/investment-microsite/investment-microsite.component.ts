import { Component, OnInit } from '@angular/core';
import {Project} from '../project';
import {PROJECTS} from '../project-list';

@Component({
  selector: 'app-investment-microsite',
  templateUrl: './investment-microsite.component.html',
  styleUrls: ['./investment-microsite.component.scss']
})
export class InvestmentMicrositeComponent implements OnInit {

  microsite: Project = PROJECTS[1];
  path = this.microsite.imgDir;

  designProcessImg = this.path + 'design_process.png';
  personaImg1 = this.path + 'Thomas_Investor.png';
  personaImg2 = this.path + 'Nancy_Investor.png';
  personaImg3 = this.path + 'Roger_Institution.png';
  personaImg4 = this.path + 'David_Advisor.png';
  flowImg = this.path + 'flow.png';
  prototypeImg = this.path + 'prototype.png';
  flaskPrototypeImg = this.path + 'flask_prototype.png';
  gitIcon = './assets/img/git.svg';

  constructor() { }

  ngOnInit() {
  }

}
