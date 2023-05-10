import { Component } from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-nhatrang',
  templateUrl: './nhatrang.component.html',
  styleUrls: ['./nhatrang.component.css']
})
export class NhatrangComponent {
  destinationName: any = "Nha Trang";
  public information:any
  public errMessage:string=''
  public infoID='6450df25aabc04d20d85d0f9'
  constructor(public inforservice: DestinationsService){

    this.inforservice.getGeneralInformationID(this.infoID).subscribe({
      next:(data)=>{this.information=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
