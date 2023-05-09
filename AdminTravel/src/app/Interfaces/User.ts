export class IUser {
  constructor(
    public _id: any = null,
    public  User_login :string="",
    public User_Pass:string="",
    public User_avatar:string="",
    public User_lock: boolean = false,
    ){}
  }
