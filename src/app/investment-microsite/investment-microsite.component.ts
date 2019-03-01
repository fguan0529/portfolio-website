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

  constructor() { }

  ngOnInit() {
  }

}
