import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/user';
import { AccountService } from 'src/app/services/account.service';
import { PostOMHService } from 'src/app/services/post-omh.service';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UseraccountComponent  implements OnInit  {
  account=new Users()
  User = localStorage.getItem('userEmail')
  errMessage: string = '';
  constructor(public _service: PostOMHService, public router: Router) {
    if(this.User!=''){
      this.searchUser(this.User)
    }
  }
  ngOnInit() {
   console.log(this.account)
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

    if (window.confirm('Bạn có muốn đăng xuất?')){
      localStorage.removeItem('userEmail')
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/homepage']);
    }

  }


}
