import { Injectable } from '@angular/core';
import { Image } from '../gallery/image-list/image'

@Injectable({
  providedIn: 'root'
})
export class ImageLoadService {
  public images:Image[];

  constructor() { 
    this.images = [
      new Image(0, "../../../assets/img/ARTE/01.jpg", "Arte"),
      new Image(1, "../../../assets/img/ARTE/02.jpg", "Arte"),
      new Image(2, "../../../assets/img/ARTE/03.jpg", "Arte"),
      new Image(3, "../../../assets/img/ARTE/04.jpg", "Arte"),
      new Image(4, "../../../assets/img/ARTE/05.jpg", "Arte"),
      new Image(5, "../../../assets/img/DEPORTE/01.jpg", "Deporte"),
      new Image(6, "../../../assets/img/DEPORTE/02.jpg", "Deporte"),
      new Image(7, "../../../assets/img/DEPORTE/03.jpg", "Deporte"),
      new Image(8, "../../../assets/img/DEPORTE/04.jpg", "Deporte"),
      new Image(9, "../../../assets/img/DEPORTE/05.jpg", "Deporte")
    ];
  }

  public GetImages(){
    return this.images;
  }
}
