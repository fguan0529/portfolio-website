import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'ng-animate';
import {transition, trigger, useAnimation} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ],
})
export class HomeComponent implements OnInit {
  fadeIn: any;

  profileImg = './assets/img/photo.jpg';

  constructor() { }

  ngOnInit() {
  }

}
