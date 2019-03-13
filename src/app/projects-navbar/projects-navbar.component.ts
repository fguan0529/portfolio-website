import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../project-list';

@Component({
  selector: 'app-projects-navbar',
  templateUrl: './projects-navbar.component.html',
  styleUrls: ['./projects-navbar.component.scss']
})
export class ProjectsNavbarComponent implements OnInit {

  projects = PROJECTS;

  scrollToTop() {
    window.scroll(0, 0);
    scrollOptions = {
      behavior: 'smooth'
    };
    window.scrollTo(scrollOptions);
  }

  constructor() { }

  ngOnInit() {
  }

}
