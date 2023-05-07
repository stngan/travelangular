import { Component } from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-danang-faq',
  templateUrl: './danang-faq.component.html',
  styleUrls: ['./danang-faq.component.css']
})
export class DanangFaqComponent {
  faq: any
  faqID = "64520f81c02d9d90b80eae70"
  errMessage:string=""
  constructor(public faqservice: DestinationsService){
    this.faqservice.getfaqID(this.faqID).subscribe({
      next:(data) => {this.faq = data},
      error: (err) => {this.errMessage = err}
    })
  }

}
