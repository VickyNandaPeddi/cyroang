import { Component } from '@angular/core';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]  
})
export class AppComponent {
  title = 'IoclProject';
  constructor(config: NgbCarouselConfig) {
    // 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.animation=true;
    config.showNavigationArrows=true;
  }

  slideData = [
    {
      id: 382,
      name: "Metal bluetooth cyan",
    }, {
      id: 822,
      name: "Avon",
    }, {
      id: 159,
      name: "Infrastructures",
    }, {
      id: 424,
      name: "Users Cotton",
    }, {
      id: 572,
      name: "Haptic Oklahoma Jewelery",
    }, {
      id: 127,
      name: "Circles Integration Street",
    }, {
      id: 1009,
      name: "uniform Communications Tuna",
    }, {
      id: 619,
      name: "North Carolina",
    }, {
      id: 716,
      name: "Eyeballs Rubber",
    }, {
      id: 382,
      name: "Nevada green unleash",
    }
  ]

  // config: SwiperOptions = {
  //   pagination: { el: '.swiper-pagination', clickable: true },
  //   autoHeight: true,
  //   allowTouchMove: true,
  //   autoplay: {
  //     delay: 6000,
  //     disableOnInteraction: true
  //   },
  //   breakpoints: {
  //     1024: {
  //       slidesPerView: 4
  //     },
  //     500: {
  //       slidesPerView: 3
  //     },
  //     400: {
  //       slidesPerView: 2
  //     },
  //     300: {
  //       slidesPerView: 1
  //     }
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev'
  //   },
  //   loop: true
  // };
}
