import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: ['img { display: flex; width: 100%; ']
})
export class MapComponent implements OnInit {
  public img:string;
  public link:string;

  constructor() {
    this.img = "assets/img/map.png";
    this.link = "https://www.google.com/maps/place/Fundacion+Bajo+Boulogne/@-34.4959984,-58.5911894,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcbadd4a0496ad:0xbd84f61be50d192c!8m2!3d-34.4959984!4d-58.5890007";
  }

  ngOnInit() {
  }

}
