import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgyNewsComponent } from './egy-news/egy-news.component';



const routes: Routes = [
  {
    path: 'news',
    component: EgyNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
