export class Users {
  constructor(
    public userName:string="",
    public userEmail:string="",
    public userPhone:string="",
    public userGender:string="",
    public userDescri:string="",
    public password:string="",
  ) {}
}
export class ForgotPassUsers {
  constructor(
    public customerEmail:string="",
    public password:string="",
  ) {}
}
