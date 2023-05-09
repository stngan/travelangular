import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdminTravel';
  constructor(public router: Router){}
  public check:boolean = true;
  Main:boolean  =true;
  public class:string=""
  change(){
    if (this.check ==true){
      this.class= "offcanvas-collapse";
    } else this.class=""
    this.check = !this.check
  }
  NavDPost(){
    this.Main = false
  }
}
