import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { waitForAsync } from '@angular/core/testing';
import { IPost } from '../Interfaces/post';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent {
  posts: any;
  post = new IPost()
  posts_Money=[{}];

  errMessage: string = '';
  public regionShow="Điểm Đến"
  public region=""
  public category:string=""
  constructor(public _service: AdminService, public router: Router) {
      this._service.getPost().subscribe({
        next: (data) => {
          this.posts = data;
          this.post = data
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


  getRaCPost(a:string, b:any){
    this._service.getRaCPost(a,b).subscribe({
      next:(data)=>{this.posts=data, this.post=data},
      error:(err)=>{this.errMessage=err}
    })
    this.category=b;
  }
  getRPost(a:string){
    this._service.getRPost(a).subscribe({
      next:(data)=>{this.posts=data, this.post=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  filterMoney(r:any, c:any, min:number, max:number){
    this._service.getRaCPrice(r,c,min,max).subscribe({
      next:(data)=>{this.posts=data, this.post=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  changeRegion(regionShow:any, region:any){
    this.regionShow=regionShow
    this.region=region
  }
  onFileSelected(event: any, post: IPost) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      post.Post_Image = reader.result!.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  postAPost() {
    if (window.confirm('Xác nhận tạo mới bài viết?')){
      this._service.postAPost(this.post).subscribe({
        next: (data) => {
          this.post = data;
        },
        error: (err) => {
          this.errMessage = err;
        },
      });
      location.reload()
    }

  }

}
