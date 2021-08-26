import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PhotoModalComponent } from 'src/components/photo-modal/photo-modal.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedVideo = "QXJWiZ0VpaU"

  constructor(private dialog: MatDialog) {

  }

  onVideoSelect(videoId) {
    this.selectedVideo = videoId;
  }

  openDialog() {
    this.dialog.open(PhotoModalComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
}
