import { TopPlaceList } from "./TopPlaceList";
export class TopPlaces {
  constructor(
    public _id: any,
    public destiID: string,
    public places: Array<TopPlaceList>
  ){}
}
