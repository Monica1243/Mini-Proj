import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageServiceService {

  constructor() { }

  page = [
    {
      page : "Title1"
    },
    {
      page : "Title2"
    },
    {
      page : "Title3"
    },
    {
      page : "Title4"
    },
    {
      page : "Title5"
    }
  ]
}
