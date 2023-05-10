export class IActivity {
  constructor(
    public _id: any = null,
    public Post_Id :string="",
    public User_Id :any = "",
    public User_name :string = "",
    public Act_cmt :string="",
    public Act_react: boolean=false,
    public Act_Created  : Date=new Date(),
    public User_avatar:string=""
    ){}
  }
