import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent {
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
  reverse(s:String) {
    var day='';
    var mon ='';
   var year = '';
   day=s.slice(0,4);
   mon = s.slice(5,7);
   year = s.slice(8,10)
   return  year+"/"+mon+"/"+day
  }
  deleteFashion(_id:any){
    if (window.confirm('confirm to delete?')){
      this._service.deletePost(_id).subscribe({
        next:(data)=>{this.posts=data},
        error:(err)=>{this.errMessage=err}
      })
    }
  }
  getMorePost(){
    let n = this.posts.length +6
    this._service.getNPost(n).subscribe({
      next: (data) => {this.posts = data},
      error: (err) => {this.errMessage = err}
    })
  }
  getRaCPost(a:string, b:String){
    this._service.getRaCPost(a,b).subscribe({
      next:(data)=>{this.posts=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getRPost(a:string){
    this._service.getRPost(a).subscribe({
      next:(data)=>{this.posts=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  navUpdatePost(f:any){
    this.router.navigate(['UPost', f._id])
  }
}
