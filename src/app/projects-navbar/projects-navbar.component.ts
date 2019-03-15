import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../project-list';

@Component({
  selector: 'app-projects-navbar',
  templateUrl: './projects-navbar.component.html',
  styleUrls: ['./projects-navbar.component.scss']
})
export class ProjectsNavbarComponent implements OnInit {

  projects = PROJECTS;

  isActive(path: string) {
    return window.location.pathname.substr(0, path.length) === path ? 'active-link' : '';/**/
  }

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
