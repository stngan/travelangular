import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostOMHService } from 'src/app/services/post-omh.service';

@Component({
  selector: 'app-highest-at-nhatrang',
  templateUrl: './highest-at-nhatrang.component.html',
  styleUrls: ['./highest-at-nhatrang.component.css']
})
export class HighestAtNhatrangComponent {
  posts: any;
  post:any;
  errMessage: string = '';

  constructor(public _service: PostOMHService, public router: Router) {
      this._service.getRPost("Dallat").subscribe({
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
