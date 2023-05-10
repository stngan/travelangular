import { Component } from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-nhatrang-faq',
  templateUrl: './nhatrang-faq.component.html',
  styleUrls: ['./nhatrang-faq.component.css']
})
export class NhatrangFaqComponent {
  faq: any
  faqID = "64520f81c02d9d90b80eae71"
  errMessage:string=""
  constructor(public faqservice: DestinationsService){
    this.faqservice.getfaqID(this.faqID).subscribe({
      next:(data) => {this.faq = data},
      error: (err) => {this.errMessage = err}
    })
  }
}
