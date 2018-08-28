import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facebook-link-events',
  template: `
  <a class="button"  href="https://es-la.facebook.com/fundacionbajoboulogne/events/" target="_blanck">  
    EVENTOS
  </a>
  `,
  styles: ['.button{ background: #3B5998; color: #fff; font-size: 1.7vw; font-weight: bold; padding: 10px 20px; border: 1px solid rgb(243, 243, 243); border-radius: 6px; } .button:hover{ box-shadow: 0px 0px 10px 2px rgb(81, 115, 189); } @media screen and (max-width: 720px) { .button{ font-size: 3vw; } }']
})
export class FacebookLinkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
