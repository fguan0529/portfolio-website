import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../project-list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  climateLens: Project = PROJECTS[0];
  microsite: Project = PROJECTS[1];
  portfolioWebsite: Project = PROJECTS[2];
  caseStudies: Project = PROJECTS[3];

  constructor() { }

  ngOnInit() {
  }

}
