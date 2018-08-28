import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-front-img',
  templateUrl: './front-img.component.html',
  styleUrls: ['./front-img.component.css']
})
export class FrontImgComponent implements OnInit {
  public images:string[];
  public imgIndex:number;

  constructor() { 
    this.images = [
      "assets/img/front.jpg",
      "assets/img/front2.jpg",
      "assets/img/front3.jpg"];

    this.imgIndex = 0;
  }

  ngOnInit() {
    const myInterval = interval(5000);
    myInterval.subscribe((x : number)=>{
      if (this.imgIndex < this.images.length - 1)
        this.imgIndex++;
      else
        this.imgIndex = 0;
    });
  }

}
