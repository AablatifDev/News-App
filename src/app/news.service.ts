import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  public getNews(): Observable<any> {
    let url = 'https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=5be5521bfa154381805005e3b6ebd39b';
    return this.http.get(url);

  }
}
