import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostOMHService } from 'src/app/services/post-omh.service';

@Component({
  selector: 'app-highest-at-danang',
  templateUrl: './highest-at-danang.component.html',
  styleUrls: ['./highest-at-danang.component.css']
})
export class HighestAtDanangComponent {
  posts: any;
  post:any;
  errMessage: string = '';

  constructor(public _service: PostOMHService, public router: Router) {
      this._service.getRPost("DaNang").subscribe({
        next: (data) => {
          this.posts = data;
        },
        error: (err) => {
          this.errMessage = err;
        },
      });
  }
  showPostDetails(p:any)
  {
    this.router.navigate(['post', p._id])
  }
}
