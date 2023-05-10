import { Component } from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-vn-general-information',
  templateUrl: './vn-general-information.component.html',
  styleUrls: ['./vn-general-information.component.css']
})
export class VnGeneralInformationComponent {
  public information:any
  public errMessage:string=''
  public infoID='6450df4faabc04d20d85d0fa'
  constructor(public inforservice: DestinationsService){

    this.inforservice.getGeneralInformationID(this.infoID).subscribe({
      next:(data)=>{this.information=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
