import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostOMHService } from 'src/app/services/post-omh.service';

@Component({
  selector: 'app-allvietnam',
  templateUrl: './allvietnam.component.html',
  styleUrls: ['./allvietnam.component.css']
})
export class AllvietnamComponent {
  posts: any;
  posts_Money=[{}];
  public post:any;
  errMessage: string = '';
  public regionShow="Điểm Đến"
  public region=""
  public category:string=""
  constructor(public _service: PostOMHService, public router: Router) {
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

}
