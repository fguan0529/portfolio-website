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

  logoImg = this.climateLens.imgDir + 'logo.png';
  leanCanvasImg = this.climateLens.imgDir + 'leancanvas.png';
  valuePropImg = this.climateLens.imgDir + 'valueprop.png';
  compAnaImg1 = this.climateLens.imgDir + 'compana_1.png';
  compAnaImg2 = this.climateLens.imgDir + 'compana_2.png';
  compAnaImg3 = this.climateLens.imgDir + 'compana_3.png';
  userJourneyImg = this.climateLens.imgDir + 'userjourney.png';
  iconImg = this.climateLens.imgDir + 'icon.png';
  splashImg1 = this.climateLens.imgDir + 'splash_1.png';
  splashImg2 = this.climateLens.imgDir + 'splash_2.png';
  onboardImg1 = this.climateLens.imgDir + 'onboard_1.png';
  onboardImg2 = this.climateLens.imgDir + 'onboard_2.png';
  onboardImg3 = this.climateLens.imgDir + 'onboard_3.png';
  onboardImg4 = this.climateLens.imgDir + 'onboard_4.png';
  mapImg = this.climateLens.imgDir + 'map.png';
  arImg1 = this.climateLens.imgDir + 'ar_1.png';
  arImg2 = this.climateLens.imgDir + 'ar_2.png';
  participateImg = this.climateLens.imgDir + 'participate.png';
  orgImg1 = this.climateLens.imgDir + 'organizations_1.png';
  orgImg2 = this.climateLens.imgDir + 'organizations_2.png';
  pledgesImg = this.climateLens.imgDir + 'pledges.png';



  constructor() {
  }

  ngOnInit() {
  }

}
