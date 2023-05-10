import { Component } from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-top-place-dalat',
  templateUrl: './top-place-dalat.component.html',
  // styleUrls: ['../top-place-danang.component.css']
  styleUrls: ['../top-place-danang/top-place-danang.component.css']
})
export class TopPlaceDalatComponent {
  places: any
  destiID = "6454f03b8b33a9ae472ccc12"
  errMessage:string=""
  constructor(public topPlaceservice: DestinationsService){
    this.topPlaceservice.gettopPlaceID(this.destiID).subscribe({
      next:(data) => {this.places = data},
      error: (err) => {this.errMessage = err}
    })
  }
}
