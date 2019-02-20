import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactLinkLabel1 = 'Download My Resume';
  contactLinkImgSrc1 = '../../assets/img/pdf.png';
  formatLabel = '[ as a pdf ]';

  contactLinkLabel2 = 'My Github';
  contactLinkImgSrc2 = '../../assets/img/git.png';
  gitLabel = '[ fguan0529 ]';

  contactLinkLabel3 = 'Copy Email to Clipboard';
  emailLabel = '[ guan.fanny@gmail.com ]';
  contactLinkImgSrc3 = '../../assets/img/clipboard.png';


  constructor() { }

  ngOnInit() {
  }

}
