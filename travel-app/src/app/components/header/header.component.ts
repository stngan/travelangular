import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {
  constructor(){}
  User = localStorage.getItem('userEmail')
  public Class_User:string="UserNone"
  public Class_nUser:string="UserBlock"
  ngOnInit() {
    if (this.CheckLogin(this.User)){
      this.Class_User = "UserBlock"
      this.Class_nUser = "UserNone"
    }
  }
  CheckLogin(U:any){
    if (U!=null){
      return true
    } else return false
  }
}
