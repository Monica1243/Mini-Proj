import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes  } from '@angular/router';
import { NewPageComponent } from './new-page.component';

const newRoutes: Routes  = [
  { path : "NewPage", component: NewPageComponent}
]
@NgModule({
  declarations: [
    NewPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(newRoutes)
  ],
  exports: []
})
export class NewPageModule { }
