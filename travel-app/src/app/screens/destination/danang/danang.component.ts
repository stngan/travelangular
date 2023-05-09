import {Component} from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';


@Component({
  selector: 'app-danang',
  templateUrl: './danang.component.html',
  styleUrls: ['./danang.component.css'],
})
export class DanangComponent {
  public information: any;
  public regionInfo: any;
  public errMessage: string = '';

  public infoID = '6450de99aabc04d20d85d0f7';

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
