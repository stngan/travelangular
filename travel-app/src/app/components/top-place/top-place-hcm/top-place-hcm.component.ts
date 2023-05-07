import { Component } from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-top-place-hcm',
  templateUrl: './top-place-hcm.component.html',
  styleUrls: ['./top-place-hcm.component.css']
})
export class TopPlaceHcmComponent {
  places: any
  destiID = "6454f03b8b33a9ae472ccc0f"
  errMessage:string=""
  constructor(public topPlaceservice: DestinationsService){
    this.topPlaceservice.gettopPlaceID(this.destiID).subscribe({
      next:(data) => {this.places = data},
      error: (err) => {this.errMessage = err}
    })
  }
}
