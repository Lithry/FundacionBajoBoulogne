import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ImageLoadService } from './services/image-load.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FrontImgComponent } from './front-img/front-img.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ImageComponent } from './gallery/image-list/image.component';
import { ImageShowComponent } from './gallery/image-show/image-show.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    AboutComponent,
    FrontImgComponent,
    WorkshopsComponent,
    GalleryComponent,
    ImageListComponent,
    ImageComponent,
    ImageShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImageLoadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
