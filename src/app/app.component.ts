import { Component, HostListener, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PhotoModalComponent } from 'src/components/photo-modal/photo-modal.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  selectedVideo = "fIQkOBexLPE"
  selectedSection = ""
  musicPlayerWidth = 800;
  videoPlayerWidth = 500;
  videoPlayerHeight = 400;
  isMobile = false;
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    console.log(event.target.scrollingElement.scrollTop);
    if (this.isMobile) {
      if (event.target.scrollingElement.scrollTop >= 867 && event.target.scrollingElement.scrollTop < 1451) {
        this.selectedSection = 'music';
      } else if (event.target.scrollingElement.scrollTop > 1451 && event.target.scrollingElement.scrollTop < 1892) {
        this.selectedSection = 'photos';
      } else if (event.target.scrollingElement.scrollTop > 1892 && event.target.scrollingElement.scrollTop < 2454) {
        this.selectedSection = 'videos';
      } else if (event.target.scrollingElement.scrollTop > 2454 && event.target.scrollingElement.scrollTop < 2900) {
        this.selectedSection = 'bio';
      } else if (event.target.scrollingElement.scrollTop < 2900) {
        this.selectedSection = '';
      }
    } else {
      if (event.target.scrollingElement.scrollTop >= 1036 && event.target.scrollingElement.scrollTop < 1613) {
        this.selectedSection = 'music';
      } else if (event.target.scrollingElement.scrollTop > 1613 && event.target.scrollingElement.scrollTop < 2154) {
        this.selectedSection = 'photos';
      } else if (event.target.scrollingElement.scrollTop > 2154 && event.target.scrollingElement.scrollTop < 2692) {
        this.selectedSection = 'videos';
      } else if (event.target.scrollingElement.scrollTop > 2692 && event.target.scrollingElement.scrollTop < 3100) {
        this.selectedSection = 'bio';
      } else if (event.target.scrollingElement.scrollTop < 1036) {
        this.selectedSection = '';
      }
    }
  }

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
      this.videoPlayerWidth = 500;
      this.videoPlayerHeight = 400;
    }
  }

  onHeaderSectionClick(className, selectedSection) {
    document.querySelector(className).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    this.selectedSection = selectedSection;
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
