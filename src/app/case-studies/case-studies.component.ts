import { Component, OnInit } from '@angular/core';
import {Project} from '../project';
import {PROJECTS} from '../project-list';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit {

  caseStudies: Project = PROJECTS[2];
  path = this.caseStudies.imgDir;

  constructor() { }

  ngOnInit() {
  }

}
