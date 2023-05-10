import { Component } from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-top-place-nhatrang',
  templateUrl: './top-place-nhatrang.component.html',
  styleUrls: ['./top-place-nhatrang.component.css']
})
export class TopPlaceNhatrangComponent {
  places: any
  destiID = "6454f03b8b33a9ae472ccc13"
  errMessage:string=""
  constructor(public topPlaceservice: DestinationsService){
    this.topPlaceservice.gettopPlaceID(this.destiID).subscribe({
      next:(data) => {this.places = data},
      error: (err) => {this.errMessage = err}
    })
  }
}
