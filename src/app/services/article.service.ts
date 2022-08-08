import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://balisage.herokuapp.com/api/article')
  }

}
