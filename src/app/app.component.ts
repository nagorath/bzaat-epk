import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedVideo = "QXJWiZ0VpaU"

  onVideoSelect(videoId) {
    this.selectedVideo = videoId;
  }
}
