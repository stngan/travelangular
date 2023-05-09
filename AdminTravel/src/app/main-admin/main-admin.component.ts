import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css']
})
export class MainAdminComponent {
  public check:boolean = true;
  public class:string=""
  public i :number=0;
  change(){
    if (this.check ==true){
      this.class= "offcanvas-collapse";
    } else this.class=""
    this.check = !this.check
  }
  posts: any;
  post:any;
  errMessage: string = '';

  constructor(public _service: AdminService, public router: Router) {
      this._service.getPost().subscribe({
        next: (data) => {
          this.posts = data;
        },
        error: (err) => {
          this.errMessage = err;
        },
      });
  }
  slipPost(s:String){
    let s1:string=""
    s1=s.slice(0,100) +"..."
  }

  getMorePost(){
    let n = this.posts.length +6
    this._service.getNPost(n).subscribe({
      next: (data) => {this.posts = data},
      error: (err) => {this.errMessage = err}
    })
  }
}
