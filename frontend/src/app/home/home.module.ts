import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';

const homeRoute: Routes = [
  { path: 'Home', component:HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute)
  ],
  exports :[
    HomeComponent
  ]
})
export class HomeModule { }
