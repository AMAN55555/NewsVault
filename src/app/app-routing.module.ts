import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { FullNewsComponent } from './full-news/full-news.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'Fullnews', component: FullNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
