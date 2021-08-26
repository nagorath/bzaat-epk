import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { YouTubePlayerModule } from "@angular/youtube-player";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { PhotoModalComponent } from '../components/photo-modal/photo-modal.component';
import { SwiperModule } from 'swiper/angular';







@NgModule({
  declarations: [
    AppComponent,
    PhotoModalComponent
  ],
  imports: [
    BrowserModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
