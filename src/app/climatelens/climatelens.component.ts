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
  path = this.climateLens.imgDir;

  logoImg = this.path + 'logo.png';
  leanCanvasImg = this.path + 'leancanvas.png';
  valuePropImg = this.path + 'valueprop.png';
  compAnaImg1 = this.path + 'compana_1.png';
  compAnaImg2 = this.path + 'compana_2.png';
  compAnaImg3 = this.path + 'compana_3.png';
  userJourneyImg = this.path + 'userjourney.png';
  iconImg = this.path + 'icon.png';
  splashImg1 = this.path + 'splash_1.png';
  splashImg2 = this.path + 'splash_2.png';
  onboardImg1 = this.path + 'onboard_1.png';
  onboardImg2 = this.path + 'onboard_2.png';
  onboardImg3 = this.path + 'onboard_3.png';
  onboardImg4 = this.path + 'onboard_4.png';
  mapImg = this.path + 'map.png';
  arImg1 = this.path + 'ar_1.png';
  arImg2 = this.path + 'ar_2.png';
  participateImg = this.path + 'participate.png';
  orgImg1 = this.path + 'organizations_1.png';
  orgImg2 = this.path + 'organizations_2.png';
  pledgesImg = this.path + 'pledges.png';



  constructor() {
  }

  ngOnInit() {
  }

}
