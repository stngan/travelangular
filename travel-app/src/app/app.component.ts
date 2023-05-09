import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'travel-app';

  // Add the change event handler to the src/app/app.component.ts that handler will update the values according to the user's
  //  input and Angular will take care of passing these values to the jsmap component
  constructor() {
    this.zoom = 0;
    this.lat = 0;
    this.lng = 0;
  }

  zoom: number;
  lat: number;
  lng: number;



}
