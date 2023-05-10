import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostOMHService } from 'src/app/services/post-omh.service';

@Component({
  selector: 'app-highest-at-hanoi',
  templateUrl: './highest-at-hanoi.component.html',
  styleUrls: ['./highest-at-hanoi.component.css']
})
export class HighestAtHanoiComponent {
  posts: any;
  post:any;
  errMessage: string = '';

  constructor(public _service: PostOMHService, public router: Router) {
      this._service.getRPost("Hanoi").subscribe({
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
