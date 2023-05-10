import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UseraccountComponent  implements OnInit  {
  account: any;
  User = localStorage.getItem('userEmail')
  errMessage: string = '';
  constructor(public _service: AccountService, public router: Router) {
    if(this.User!=''){
      this.searchUser(this.User)
    }
  }
  ngOnInit() {
   console.log(this.User)
  }
  searchUser(u:any){
    this._service.getAccount(u).subscribe({
      next: (data) => {
        this.account = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  LogOut(){
    localStorage.removeItem('userEmail')
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/homepage']);
  }

}
