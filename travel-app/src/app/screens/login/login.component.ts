import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { AbstractControl, AsyncValidatorFn, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/interfaces/user';
import { IUser } from 'src/app/interfaces/Iuser';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = new Users();
loginForm:any;
cusInfo:any
  check = false
  emailExist=false
  userName = '';

  constructor(private formBuilder: FormBuilder, private _service: LoginService, private router: Router, private route: ActivatedRoute, private _http:HttpClientModule){}
  // account
  //login nháp
  aUser = new IUser()
  onSubmit(aUser: any): void {
    this._service.getUsers(aUser).subscribe({
      next:(data) => {
        this.check = data;
        if (this.check) {
          localStorage.setItem('userEmail', aUser.userEmail);
          localStorage.setItem('isLoggedIn', 'true');
          this._service.getUserName().subscribe({
            next: (data) => {
              this.userName = data.userName;
            },
            error: (err) => {
              console.log(err);
            },
          });
          this.router.navigate(['/homepage']);
        } else {
          console.log("error");
        }
      }
    });
    // this.authService.login();
  }

  // validator
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email],[this.emailExistsValidator()]],
      password: ['', [Validators.required,Validators.minLength(6)]],
    });
  }
  get email(){
    return this.loginForm.controls['email']
  }
  // goToForgotPassword(){
  //   this.router.navigate(['/forgotpassword']);
  // }
  //kiểm tra email không tồn tại
  emailExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this._service.checkEmailExists(control.value).pipe(
        map(res => {
          return res ? null : { emailExist: true };
        }),
        catchError(() => of(null))
      );
    };
  }
  checkEmail() {
    if (this.aUser.customerEmail) {
      this._service.checkEmailExists(this.aUser.customerEmail).subscribe({
        next: (data) => {
          this.emailExist = !data;
          if (this.emailExist) {
            this.loginForm.controls['email'].setErrors({ emailExist: true });
          } else {
            this.loginForm.controls['email'].setErrors(null);
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
  SignIn() {
    this.router.navigate(['/signup']);
  }
}
