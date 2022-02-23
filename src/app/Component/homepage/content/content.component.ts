import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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


  // config: SwiperOptions = {
  //   autoplay: {
  //     delay: 800,
  //     disableOnInteraction: false
  //   },
  //   speed: 800,
  //   loop: true,
  //   effect: 'fade',
  //   grabCursor: true,
  //   fadeEffect: {
  //     crossFade: true
  //   }
  // };


  config: SwiperOptions = {
    autoplay: {
      delay: 800,
      disableOnInteraction: false
    },
    speed: 800,
    loop: true,
    effect: 'coverflow',
    //slide , flip,cube
    grabCursor: true,
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  };


  // config: SwiperOptions = {
  //   autoplay: {
  //     delay: 600,
  //     disableOnInteraction: false
  //   },
  //   speed: 800,
  //   loop: true,
  //   effect: 'coverflow',
  //   grabCursor: true,
  //   coverflowEffect: {
  //     slideShadows: true,
  //     rotate: 15,
  //     stretch: 15,
  //     depth: 5,
  //     modifier: 5
  //   }
  // };
}
