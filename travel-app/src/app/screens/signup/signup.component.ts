import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Users } from 'src/app/interfaces/user';
import { customerValidator, repeatPwValidator } from 'src/app/interfaces/validator';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
SignIn() {
throw new Error('Method not implemented.');
}

  user =new Users();
  errMessage:string=''
  userInfo:any
  mailExisted=false
  signupForm: any;
  errFlag: boolean = false;
  constructor(private fb: FormBuilder, private _service: SignupService, private router: Router){
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2),customerValidator]],
      email: ['', [Validators.required, Validators.email],[this.emailExists()]],
      password: ['', [Validators.required]],
      confirmPass: ['', [Validators.required]]
    }, { validators: repeatPwValidator });
  }
  get name(){
    return this.signupForm.controls['name']
  }
  get email(){
    return this.signupForm.controls['email']
  }
  get confirmPass(){
    return this.signupForm.controls['confirmPass']
  }
  emailExists() {
    return (control: AbstractControl): Observable<{[key: string]: any} | null> => {
      return this._service.checkEmail(control.value).pipe(
        map(res => {
          return res ? {emailExists: true} : null;
        })
      );
    }
  }

  checkEmail() {
    this._service.checkEmail(this.user.userEmail)
      .subscribe(data => {
        if (data) {
          this.signupForm.controls['email'].setErrors({ emailExists: true });
        } else {
          this.signupForm.controls['email'].setErrors(null);
        }
      });
  }

  postUsers(){
    this._service.postUsers(this.user).subscribe({
      next:(data)=>{this.userInfo=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  LogIn(){
    this.router.navigate(['/login'])
  }
}
