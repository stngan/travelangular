import { FAQList } from "./faqList";
export class FAQ {
  constructor(
    public _id: any,
    public destiID: string,
    public faqName: string,
    public faqList: Array<FAQList>
  ){}
}
