import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../project-list';

@Component({
  selector: 'app-climatelens',
  templateUrl: './climatelens.component.html',
  styleUrls: ['./climatelens.component.scss']
})
export class ClimatelensComponent implements OnInit {

  climateLens: Project = PROJECTS[0];

  constructor() {
  }

  ngOnInit() {
  }

}
