import { Component } from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-top-place-hanoi',
  templateUrl: './top-place-hanoi.component.html',
  styleUrls: ['./top-place-hanoi.component.css']
})
export class TopPlaceHanoiComponent {
  places: any
  destiID = "6454f03b8b33a9ae472ccc11"
  errMessage:string=""
  constructor(public topPlaceservice: DestinationsService){
    this.topPlaceservice.gettopPlaceID(this.destiID).subscribe({
      next:(data) => {this.places = data},
      error: (err) => {this.errMessage = err}
    })
  }
}
