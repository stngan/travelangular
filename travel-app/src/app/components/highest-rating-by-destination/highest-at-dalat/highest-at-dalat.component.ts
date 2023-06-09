import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostOMHService } from 'src/app/services/post-omh.service';

@Component({
  selector: 'app-highest-at-dalat',
  templateUrl: '../highest-at-hcm/highest-at-hcm.component.html',
  styleUrls: ['../highest-at-hcm/highest-at-hcm.component.css']
})
export class HighestAtDalatComponent {
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
    this.router.navigate(['post', p._id],{ queryParams: { from: 'destinationDALAT' }})
  }
}
