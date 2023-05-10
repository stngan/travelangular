import { Component } from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-hanoi',
  templateUrl: './hanoi.component.html',
  styleUrls: ['./hanoi.component.css']
})
export class HanoiComponent {
  destinationName: any = "Hà Nội";
  public information:any
  public errMessage:string=''
  public infoID='6450de49aabc04d20d85d0f6'
  constructor(public inforservice: DestinationsService){

    this.inforservice.getGeneralInformationID(this.infoID).subscribe({
      next:(data)=>{this.information=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
