import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes  } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewPageComponent } from './new-page.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ContentComponent } from './content/content.component';

const newRoutes: Routes  = [
  { path : "NewPage", component: NewPageComponent}
]
@NgModule({
  declarations: [
    NewPageComponent,
    ImageUploadComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(newRoutes)
  ],
  exports: []
})
export class NewPageModule { }
