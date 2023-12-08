import { Component } from '@angular/core';
import { NewsService } from '../Services/news.service';

@Component({
  selector: 'app-full-news',
  templateUrl: './full-news.component.html',
  styleUrls: ['./full-news.component.css']
})
export class FullNewsComponent {

  constructor(private newsSvc: NewsService) { }

  data:any=this.newsSvc.passedNews;
}
