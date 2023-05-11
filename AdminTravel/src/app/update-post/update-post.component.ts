import { Component, OnInit } from '@angular/core';
import { IPost } from '../Interfaces/post';
import { AdminService } from '../admin.service';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { IActivity } from '../Interfaces/Activity';
import { IReact } from '../Interfaces/React';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  posts: any;
  Acts:any
  post= new IPost()
  Act = new IActivity()
  React = new IReact()
  errMessage: string = '';
  enable:boolean=false;
  like:boolean=false;
  cmtView:boolean=true;
  date:Date=new Date()
  user:string = "644cb5fdacfae4e6dd6b4014"
  getReact:any
  constructor(private _service: AdminService, private activateRoute: ActivatedRoute, private router:Router) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id')
      if (id != null) {
        this.searchPost(id)
        this.searchCmt(id)
        this.searchReact(id,this.user)
      }
    }
    )

  }
  ngOnInit() {

  }

  assigns() {
    if (this.errMessage == ""){
      this.like = this.getReact.Act_react
    }
    this.like =true
    console.log('aaaa')
  }

  Reacted(){
    this.like=!this.like
    if(this.like == true) {
      this.posts.Post_Interact.Post_Like+=1;
    } else {
      this.posts.Post_Interact.Post_Like-=1;
    }
  }
  postReact(){
    if(this.like == true){
      if (window.confirm('confirm to save data?')){
        this.React.Post_Id = this.posts._id
        this.React.Post_Address = this.posts.Post_Address
        this.React.Post_Category = this.posts.Post_Category
        this.React.Post_Content = this.posts.Post_Content
        this.React.Post_Pice = this.posts.Post_Pice
        this.React.Post_PriceUnit = this.posts.Post_PriceUnit
        this.React.Post_Region = this.posts.Post_Region
        this.React.Post_TimeActive = this.posts.Post_TimeActive
        this.React.Post_Title = this.posts.Post_Title
        this.React.Post_Image = this.posts.Post_Image
        this._service.postReact(this.React).subscribe({
          next: (data) => {
            this.post = data;
          },
          error: (err) => {
            this.errMessage = err;
          },
        });
        this.navDPost()
      }
      this._service.putPost(this.posts).subscribe({
        next: (data) => {
          this.posts = data;
        },
        error: (err) => {
          this.errMessage = err;
        },
      });
    } else {
      this.navDPost()
    }


  }
  navDPost(){
    this.router.navigate(['DPost'])
  }
  searchPost(postId: string) {
    this._service.getAPost(postId).subscribe({
      next: (data) => {this.post = data},
      error: (err) => {this.errMessage = err}
    })
    console.log(this.posts)
  }
  putPost() {
    this._service.putPost(this.posts).subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  CmtView(s:any, id:any){
    this.Act.Act_cmt=s
    this.cmtView = false;
    this.Act._id=id
  }
  putCmt(s:string) {
    this.Act.Post_Id = this.posts._id
    this.Act.Act_cmt = s;
    this._service.putCMT(this.Act).subscribe({
      next: (data) => {
        this.Act = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
    location.reload()
    this.cmtView = true;
  }
  enablePost(cmt:string){
    if (cmt != ""){
      this.enable=false
    }
  }
  searchCmt(postId: string){
    this._service.getACmt(postId).subscribe({
      next: (data) => {this.Acts = data},
      error: (err) => {this.errMessage = err}
    })
  }
  searchReact(PostId:string, UserId:string){
    this._service.getAReact(PostId,UserId).subscribe({
      next: (data) => {this.like = data.Act_react},
      error: (err) => {this.errMessage = err}
    })
  }
  postAC() {
    this.Act.Post_Id = this.posts._id
    this._service.postAC(this.Act).subscribe({
      next: (data) => {
        this.post = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
    // location.reload()
    this.Act.Act_cmt=""
    this.searchCmt(this.posts._id)
  }
  deleteCmt(_id:any){
    if (window.confirm('confirm to delete?')){
      this._service.deleteCmt(_id).subscribe({
        next:(data)=>{this.Acts=data},
        error:(err)=>{this.errMessage=err}
      })
    }
    location.reload()
  }
  reverse(s:String) {
    var day='';
    var mon ='';
   var year = '';
   day=s.slice(0,4);
   mon = s.slice(5,7);
   year = s.slice(8,10)
   return  year+"/"+mon
  }

  putFashion() {
    if (window.confirm('Xác nhận chỉnh sửa dữ liệu?')){
      this._service.putPost(this.post).subscribe({
        next: (data) => {
          this.post = data;
        },
        error: (err) => {
          this.errMessage = err;
        },
      });
    }

  }
}
