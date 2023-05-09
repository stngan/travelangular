import { Inter } from "./Interact";

export class IPost {
  constructor(
    public _id: any = null,
    public Post_Address:string="",
    public Post_Category:string="Accommodation",
    public Post_Content:string="",
    public Post_DateCreated: Date=new Date(),
    public Post_Pice: Number = 0,
    public Post_PriceUnit:string="Đêm",
    public Post_Region:string="Dallat",
    public Post_TimeActive:string="Cả Ngày",
    public Post_Title:string="",
    public Post_Image:string="",
    public Post_Interact: Inter = new Inter(),
    ){}
  }
