import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../project-list';

@Component({
  selector: 'app-projects-navbar',
  templateUrl: './projects-navbar.component.html',
  styleUrls: ['./projects-navbar.component.scss']
})
export class ProjectsNavbarComponent implements OnInit {

  projects = PROJECTS;

  constructor() { }

  ngOnInit() {
  }

}
