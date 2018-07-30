import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: ['agm-map { height: 300px; }']
})
export class MapComponent implements OnInit {
  lat: number;
  lng: number;
  constructor() {
    this.lat = 51.678418;
    this.lng = 7.809007;
  }

  ngOnInit() {
    
  }
}
