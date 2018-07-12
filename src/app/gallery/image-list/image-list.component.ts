import { Component, OnInit, Input } from '@angular/core';
import { Image } from './image';
import { ImageLoadService } from '../../services/image-load.service'

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  public images:Image[];
  public imageId:number;
  public showImage:boolean;

  constructor(private imageLoad:ImageLoadService) {}

  ngOnInit() {
    this.images = this.imageLoad.GetImages();
    this.showImage = true;
  }

  OnSelect(id:number){
    this.imageId = id;
  }
}
