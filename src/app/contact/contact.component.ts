import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number;
  lng: number;
  constructor() {
    this.lat = 51.678418;
    this.lng = 7.809007;
  }

  ngOnInit() {
  }

}
