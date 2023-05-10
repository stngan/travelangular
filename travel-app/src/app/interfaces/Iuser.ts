export interface IUser {
  userEmail: string;
  password: string;
  }
  export class IUser {
    constructor(
      public userEmail:string="",
      public password:string=""
    ){}
  }
