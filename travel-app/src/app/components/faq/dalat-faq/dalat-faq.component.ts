import { Component } from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-dalat-faq',
  templateUrl: './dalat-faq.component.html',
  styleUrls: ['./dalat-faq.component.css']
})
export class DalatFaqComponent {
  faq: any
  faqID = "64520f81c02d9d90b80eae6e"
  errMessage:string=""
  constructor(public faqservice: DestinationsService){
    this.faqservice.getfaqID(this.faqID).subscribe({
      next:(data) => {this.faq = data},
      error: (err) => {this.errMessage = err}
    })
  }
}
