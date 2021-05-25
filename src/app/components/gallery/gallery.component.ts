import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  // slayt icin;
  images = ['../assets/images/1.jpeg', '../assets/images/2.jpeg', '../assets/images/3.jpeg', '../assets/images/4.jpeg', '../assets/images/5.jpg', '../assets/images/14.jpg', '../assets/images/29.jpg', '../assets/images/31.jpg', '../assets/images/37.jpg', '../assets/images/41.jpg', '../assets/images/43.jpg', '../assets/images/56.jpg', '../assets/images/60.jpg', '../assets/images/63.jpg','../assets/images/96.jpg'];
  
  // alltaki gallery resimleri icin;
  imagesforgallery = ['../assets/images/8.jpg','../assets/images/9.jpg', '../assets/images/12.jpg', '../assets/images/19.jpg', '../assets/images/20.jpg','../assets/images/21.jpg','../assets/images/22.jpg','../assets/images/24.jpg','../assets/images/28.jpg','../assets/images/30.jpg','../assets/images/32.jpg','../assets/images/33.jpg','../assets/images/35.jpg','../assets/images/36.jpg','../assets/images/38.jpg','../assets/images/39.jpg','../assets/images/40.jpg','../assets/images/45.jpg','../assets/images/47.jpg','../assets/images/48.jpg','../assets/images/49.jpg','../assets/images/51.jpg','../assets/images/52.jpg','../assets/images/53.jpg','../assets/images/54.jpg','../assets/images/55.jpg','../assets/images/58.jpg','../assets/images/59.jpg','../assets/images/61.jpg','../assets/images/65.jpg','../assets/images/69.jpg','../assets/images/70.jpg','../assets/images/73.jpg','../assets/images/74.jpg','../assets/images/75.jpg','../assets/images/76.jpg','../assets/images/81.jpg','../assets/images/82.jpg','../assets/images/83.jpg','../assets/images/84.jpg','../assets/images/85.jpg','../assets/images/92.jpg','../assets/images/93.jpg','../assets/images/95.jpg','../assets/images/97.jpg','../assets/images/98.jpg','../assets/images/99.jpg','../assets/images/106.jpg'];

  OpenImg = '';

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor() { }

  ngOnInit() {
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  OpenImage(imag) {
    this.OpenImg = imag;
    console.log('OpenImage', this.OpenImg);
  }
}
