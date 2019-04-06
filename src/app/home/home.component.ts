import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import { slideInRight, slideInLeft } from 'ng-animate';
import {transition, trigger, useAnimation} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInRight', [transition('* => *', useAnimation(slideInRight))]),
    trigger('slideInLeft', [transition('* => *', useAnimation(slideInLeft))]),
  ]
})
export class HomeComponent implements OnInit {
  profileImg = './assets/img/photo.jpg';
  profileImgAlt = './assets/img/mushu_fanny.svg';

  slideInRight: any;
  slideInLeft: any;

  constructor(config: NgsRevealConfig) {
    config.duration = 800;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

  }

  ngOnInit() {
  }

}
