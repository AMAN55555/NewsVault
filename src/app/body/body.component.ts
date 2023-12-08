import { Component, Renderer2, ElementRef } from '@angular/core';
import { NewsService } from '../Services/news.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  constructor(private newsSvc: NewsService, private renderer: Renderer2, private el: ElementRef, private router: Router) { }

  news: any;
  topic: any;
  isSelected: boolean = false;

  ngOnInit() {
    this.newsSvc.FetchNews(this.topic).subscribe((data: any) => {
      this.news = data.articles;
      console.log(this.news[0]);
    })
  }

  onSearchInputChange() {
    this.ngOnInit();
    console.log('Search query changed:', this.topic);
  }

  getIndex(item: number): number {
    return this.news.indexOf(item);
  }

  smallWindow(id: any) {
    if (this.isSelected == false) {
      const element = document.getElementById(id);
      const element2 = document.getElementById(`close${id}`);
      const element3 = document.getElementById(`card-box${id}`);

      this.renderer.setStyle(element2, 'display', 'block');
      this.renderer.addClass(element, 'selectedNews');
      this.renderer.addClass(element3, 'full');

      this.newsSvc.passedNews = this.news[id];
      this.isSelected = true;
    }
  }

  FullSreen(id: any) {
    if (this.isSelected) {
      console.log(id);
      this.isSelected = false;
      this.router.navigate(['/Fullnews']);
    }
  }

  close(id: any) {
    const element = document.getElementById(id);
    const element2 = document.getElementById(`close${id}`);
    const element3 = document.getElementById(`card-box${id}`);

    this.renderer.setStyle(element2, 'display', 'none');
    this.renderer.removeClass(element, 'selectedNews');
    this.renderer.removeClass(element3, 'full');
    this.isSelected = false;
  }

}
