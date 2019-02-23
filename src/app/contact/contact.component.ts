import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [NavbarComponent]
})
export class ContactComponent implements OnInit {

  contactLinkLabel1 = 'Download My Resume';
  contactLinkImgSrc1 = './assets/img/export.png';
  formatLabel = '[ as a pdf ]';

  contactLinkLabel2 = 'My Github';
  contactLinkImgSrc2 = './assets/img/git.png';
  gitLabel = '[ fguan0529 ]';

  contactLinkLabel3 = 'Copy Email to Clipboard';
  emailLabel = '[ guan.fanny@gmail.com ]';
  contactLinkImgSrc3 = './assets/img/gmail.png';

  resumeLinkSrc = '';

  constructor(private nav: NavbarComponent) {
    this.resumeLinkSrc = nav.resumeLinkSrc;
  }

  ngOnInit() {
  }

}
