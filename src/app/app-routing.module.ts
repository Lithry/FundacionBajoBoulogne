import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { DonationsComponent } from './donations/donations.component'

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
    path:'Contact',
    component:ContactComponent
  },
  {
    path:'Gallery',
    component:GalleryComponent
  },
  {
    path:'Events',
    component:EventsComponent
  },
  {
    path:'Donations',
    component:DonationsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }