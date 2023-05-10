export class Users {
  constructor(
    public userName:string="",
    public userEmail:string="",
    public userPhone:string="",
    public userGender:string="",
    public userDescri:string="",
    public password:string="",
    public user_avatar:string="assets/user.jpg"
  ) {}
}
export class ForgotPassUsers {
  constructor(
    public customerEmail:string="",
    public password:string="",
  ) {}
}
