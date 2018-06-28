import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-img',
  templateUrl: './front-img.component.html',
  styleUrls: ['./front-img.component.css']
})
export class FrontImgComponent implements OnInit {
  public img:string;

  constructor() { 
    this.img = "assets/img/front.jpg";
  }

  ngOnInit() {
  }

}
