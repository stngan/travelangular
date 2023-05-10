import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostOMHService } from 'src/app/services/post-omh.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  post: any;
  errMessage:string=''
  constructor( ActivatedRout:ActivatedRoute,private _service:PostOMHService,private router:Router){
  ActivatedRout.paramMap.subscribe(
    (param)=>{
      let id=param.get('_id')
      if (id!=null)
      {
        this._service.getAPost(id).subscribe({
          next: (data)=>{this.post=data},
          error: (err)=>{this.errMessage=err}
        })
      }
    }
  )
  }
  goBack(){
    this.router.navigate([''])
  }
}
