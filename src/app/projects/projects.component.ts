import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  project1Link = '/climatelens';
  project1Name = 'ClimateLens';

  project2Link = '/investment-microsite';
  project2Name = 'Investment Bank Microsite';

  project3Link = '/portfolio-website-project';
  project3Name = 'Portfolio Website';

  project4Link = '/case-studies';
  project4Name = 'Case Studies';

  constructor() { }

  ngOnInit() {
  }

}
