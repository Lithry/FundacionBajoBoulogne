import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'About',
    component:AboutComponent
  },
  {
    path:'Workshops',
    component:WorkshopsComponent
  },
  {
    path:'Gallery',
    component:GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
