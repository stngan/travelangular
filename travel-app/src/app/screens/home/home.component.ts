import { Component,OnInit } from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  check = localStorage.getItem('isLoggedIn')
  constructor(){
  }

  ngOnInit() {
    this.set()
  }
  set(){
    if (this.check=='true')
    {
      this.load()
      localStorage.setItem('isLoggedIn', 'False');
    }
  }
  load(){
    location.reload()
  }
}
