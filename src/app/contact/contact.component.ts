import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactLinkLabel1 = 'Download My Resume';
  contactLinkImgSrc1 = '../../assets/img/photo.jpg';

  contactLinkLabel2 = 'My Github';
  contactLinkImgSrc2 = '../../assets/img/photo.jpg';

  contactLinkLabel3 = 'Copy Email to Clipboard';
  contactLinkImgSrc3 = '../../assets/img/photo.jpg';


  constructor() { }

  ngOnInit() {
  }

}
