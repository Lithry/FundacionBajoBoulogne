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
      new Image(9, "../../../assets/img/DEPORTE/05.jpg", "Deporte"),
      new Image(10, "../../../assets/img/COCINA/01.jpg", "Cocina"),
      new Image(11, "../../../assets/img/COCINA/02.jpg", "Cocina"),
      new Image(12, "../../../assets/img/COCINA/03.jpg", "Cocina"),
      new Image(13, "../../../assets/img/COCINA/04.jpg", "Cocina"),
      new Image(14, "../../../assets/img/COCINA/05.jpg", "Cocina"),
      new Image(15, "../../../assets/img/COCINA/06.jpg", "Cocina"),
      new Image(16, "../../../assets/img/COCINA/07.jpg", "Cocina"),
      new Image(17, "../../../assets/img/MUSICA/01.jpg", "Musica"),
      new Image(18, "../../../assets/img/MUSICA/02.jpg", "Musica"),
      new Image(19, "../../../assets/img/MUSICA/03.jpg", "Musica"),
      new Image(20, "../../../assets/img/MUSICA/04.jpg", "Musica"),
      new Image(21, "../../../assets/img/MUSICA/05.jpg", "Musica"),
      new Image(22, "../../../assets/img/CINE/01.jpg", "Cine"),
      new Image(23, "../../../assets/img/CINE/02.jpg", "Cine"),
      new Image(24, "../../../assets/img/CINE/03.jpg", "Cine"),
      new Image(25, "../../../assets/img/CINE/04.jpg", "Cine"),
      new Image(26, "../../../assets/img/CINE/05.jpg", "Cine"),
      new Image(27, "../../../assets/img/NATURALEZA/01.jpg", "Naturaleza"),
      new Image(28, "../../../assets/img/NATURALEZA/02.jpg", "Naturaleza"),
      new Image(29, "../../../assets/img/NATURALEZA/03.jpg", "Naturaleza"),
      new Image(30, "../../../assets/img/NATURALEZA/04.jpg", "Naturaleza"),
      new Image(31, "../../../assets/img/NATURALEZA/05.jpg", "Naturaleza"),
      new Image(32, "../../../assets/img/RELAJACION/01.jpg", "Relajacion"),
      new Image(33, "../../../assets/img/RELAJACION/02.jpg", "Relajacion"),
      new Image(34, "../../../assets/img/RELAJACION/03.jpg", "Relajacion"),
      new Image(35, "../../../assets/img/RELAJACION/04.jpg", "Relajacion"),
      new Image(36, "../../../assets/img/RELAJACION/05.jpg", "Relajacion")
    ];
  }

  public GetImages(){
    return this.images;
  }
}
