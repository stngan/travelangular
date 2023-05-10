import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IActivity } from 'src/app/interfaces/Activity';
import { IReact } from 'src/app/interfaces/React';
import { IPost } from 'src/app/interfaces/post';
import { Users } from 'src/app/interfaces/user';
import { PostOMHService } from 'src/app/services/post-omh.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  account=new Users()
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

  getReact:any
  postID:string="";
  constructor(private _service: PostOMHService, private activateRoute: ActivatedRoute, private router:Router) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id')
      if (id != null) {
        this.searchPost(id)
        this.searchCmt(id)

      }
    }
    )

  }
  user = localStorage.getItem('userEmail')
  ngOnInit() {
    console.log(this.postID)
    this.searchUser(this.user)
    console.log(this.account)
    this.searchReact(this.Act.Post_Id,this.account._id)
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
  geti(i:any){
    this.postID = i
  }
  assigns() {
    if (this.errMessage == ""){
      this.like = this.getReact.Act_react
    }
    this.like =true
    console.log('aaaa')
  }

  Reacted(){
    if (this.account._id == null){
      alert("bạn phải đăng nhập")

    } else{
      this.like=!this.like
      if(this.like == true) {
        this.posts.Post_Interact.Post_Like+=1;
      } else {
        this.posts.Post_Interact.Post_Like-=1;
      }
    }

  }
  postReact(){
    if(this.like == true){
      if (window.confirm('confirm to save data?')){
        this.React.User_Id = this.account._id
        this.React.User_avatar = this.account.user_avatar
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
      next: (data) => {this.posts = data},
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
    if (this.account._id == this.Act.User_Id)
    {
      this.Act.Post_Id = this.posts._id
      this.Act.Act_cmt = s;
      this.Act.User_Id = this.account._id
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
    } alert("Bạn không có quyền chỉnh sửa")

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
  searchReact(PostId:string, UserId:any){
    this._service.getAReact(PostId,UserId).subscribe({
      next: (data) => {this.like = data.Act_react},
      error: (err) => {this.errMessage = err}
    })
  }
  postAC() {
    this.Act.Post_Id = this.posts._id
    this.Act.User_Id = this.account._id
    this.Act.User_name = this.account.userName
    this.Act.User_avatar = this.account.user_avatar
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
    if (this.account._id == this.Act.User_Id){
      if (window.confirm('confirm to delete?')){
        this._service.deleteCmt(_id).subscribe({
          next:(data)=>{this.Acts=data},
          error:(err)=>{this.errMessage=err}
        })
      }
      location.reload()
    }alert("Bạn không có quyền xóa bình luận của người khác")

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
  goBack(){
    this.router.navigate(['/post'])
  }
}
