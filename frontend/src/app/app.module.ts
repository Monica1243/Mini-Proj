import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewPageModule } from './new-page/new-page.module';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HomeModule } from './home/home.module';
import { HeaderComponent } from './shared/templates/header/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NewPageModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
