import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PhotoModalComponent } from 'src/components/photo-modal/photo-modal.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  selectedVideo = "QXJWiZ0VpaU"
  musicPlayerWidth = 800;
  videoPlayerWidth = 500;
  videoPlayerHeight = 400;
  isMobile = false; 

  constructor(private dialog: MatDialog) {

  }

  ngOnInit() {
    if (window.outerWidth < 720) {
      this.isMobile = true
      this.musicPlayerWidth = 350;
      this.videoPlayerWidth = 350;
      this.videoPlayerHeight = 300;
    } else {
      this.isMobile = false
      this.musicPlayerWidth = 800;
      this.musicPlayerWidth = 500;
      this.videoPlayerHeight = 400;
    }
  }

  onVideoSelect(videoId) {
    this.selectedVideo = videoId;
  }

  onPhotoClick(imgSrc) {
    if (window.outerWidth > 720) {
    this.dialog.open(PhotoModalComponent, {
      data: {
        imgSrc
        }
      });
    }
  }
}
