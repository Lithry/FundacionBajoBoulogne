import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image-list/image';
import { ImageLoadService } from '../../services/image-load.service'

@Component({
  selector: 'app-image-show',
  templateUrl: './image-show.component.html',
  styleUrls: ['./image-show.component.css']
})
export class ImageShowComponent implements OnInit {
  @Input() imageId:number;
  @Input() images:Image[];
  @Input() show:boolean;
  
  constructor(private imageLoad:ImageLoadService) {}

  ngOnInit() {
    this.images = this.imageLoad.GetImages();
    this.imageId = -1;
    this.show = false;
  }

  CloseWindow(){
    this.imageId = -1;
    this.show = false;
  }

  BackImage(){
    if (this.imageId > 0) {
      this.imageId--;
    }
  }

  ForwardImage(){
    if (this.images.length - 1 > this.imageId) {
      this.imageId++;
    }
  }
}
