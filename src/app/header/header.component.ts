import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public logo:string;

  constructor(private router: Router) { 
    this.logo = "assets/img/logo2.png";
  }

  ngOnInit(){}

  navigateTo(value) {
    if (value) {
        this.router.navigate([value]);
    }
    return false;
  }
}
