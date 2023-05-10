import { Component } from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-dalat',
  templateUrl: './dalat.component.html',
  styleUrls: ['./dalat.component.css']
})
export class DalatComponent {
  destinationName:any = "Đà Lạt"
  public information: any;
  public regionInfo: any;
  public errMessage: string = '';

  public infoID = '6450dedbaabc04d20d85d0f8';

  constructor(public inforservice: DestinationsService) {
    this.inforservice.getGeneralInformationID(this.infoID).subscribe({
      next: (data) => {
        this.information = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}
