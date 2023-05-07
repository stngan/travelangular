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
  public infoID='644e6574eb41b9ff1f1cf58a'
  constructor(public inforservice: DestinationsService, private weatherservice: WeatherService){

    this.inforservice.getGeneralInformationID(this.infoID).subscribe({
      next:(data)=>{this.information=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
