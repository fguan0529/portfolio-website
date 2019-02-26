import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logoImgSrc = './assets/img/logo.png';
  resumeLinkSrc = './assets/GUAN_Fanny_Resume_2019.pdf';
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  closeNavbar() {
    if (this.navbarOpen) {
      this.toggleNavbar();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
