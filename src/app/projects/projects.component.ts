import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  project1Name = 'Investment Bank Microsite';
  project2Name = 'ClimateLens';
  project3Name = 'Portfolio Website';
  project4Name = 'Case Studies';

  constructor() { }

  ngOnInit() {
  }

}
