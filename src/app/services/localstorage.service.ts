import { Injectable } from '@angular/core';
import { Iarticle } from '../interfaces/Iarticle';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  articles:Array<Iarticle>=[]
  constructor() { }

  setData(articles:Array<Iarticle>){
    this.articles=articles;
  }

}
