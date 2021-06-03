import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-egy-news',
  templateUrl: './egy-news.component.html',
  styleUrls: ['./egy-news.component.css']
})
export class EgyNewsComponent implements OnInit {

  p : number = 1;

  articles: any;
  constructor(private news: NewsService) { }

  ngOnInit() {
    this.news.getNews().subscribe((data) => {
      console.log(data)
      this.articles = data['articles'];
    });

  }


}
