import { Component } from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-hcm',
  templateUrl: './hcm.component.html',
  styleUrls: ['./hcm.component.css']
})
export class HCMComponent {
  destinationName: any = "TP Hồ Chí Minh";
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
