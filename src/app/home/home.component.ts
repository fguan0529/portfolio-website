import { Component, OnInit } from '@angular/core';
import {NgsRevealConfig} from 'ngx-scrollreveal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profileImg = './assets/img/photo.jpg';

  constructor(config: NgsRevealConfig) {
    config.duration = 800;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

  }

  ngOnInit() {
  }

}
