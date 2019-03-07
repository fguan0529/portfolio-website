import { Component, OnInit } from '@angular/core';
import {Project} from '../project';
import {PROJECTS} from '../project-list';

@Component({
  selector: 'app-portfolio-website-details',
  templateUrl: './portfolio-website-details.component.html',
  styleUrls: ['./portfolio-website-details.component.scss']
})
export class PortfolioWebsiteDetailsComponent implements OnInit {

  portfolio: Project = PROJECTS[2];
  path = this.portfolio.imgDir;

  constructor() { }

  ngOnInit() {
  }

}
