import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../project-list';

@Component({
  selector: 'app-climatelens',
  templateUrl: './climatelens.component.html',
  styleUrls: ['./climatelens.component.scss']
})
export class ClimatelensComponent implements OnInit {

  climateLens: Project = PROJECTS[0];
  mobile = false;

  logoImg = './assets/img/climatelens_logo.png';
  leanCanvasImg = './assets/img/climatelens_leancanvas.png';
  valuePropImg = './assets/img/climatelens_valueprop.png';
  compAnaImg1 = './assets/img/climatelens_compana_1.png';
  compAnaImg2 = './assets/img/climatelens_compana_2.png';
  compAnaImg3 = './assets/img/climatelens_compana_3.png';
  userJourneyImg = './assets/img/climatelens_userjourney.png';
  iconImg = './assets/img/climatelens_icon.png';

  constructor() {
  }

  ngOnInit() {
  }

}
