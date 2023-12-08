import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpsvc:HttpClient) {}

  passedNews:any;

  FetchNews(topic:any){
    if(topic==null)return this.httpsvc.get(`https://gnews.io/api/v4/search?q=world&lang=en&apikey=`);
    else return this.httpsvc.get(`https://gnews.io/api/v4/search?q=${topic}&lang=en&apikey=`);
   }

  
}
