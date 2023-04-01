import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CarouselConfig } from '../carousel/carousel/carousel';
import { Carousel } from '../carousel/carousel/carousel.component';

@Component({
  selector: 'app-carousel-consumer',
  templateUrl: './carousel-consumer.component.html',
  styleUrls: ['./carousel-consumer.component.scss']
})
export class CarouselConsumerComponent implements AfterViewInit {
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel: Carousel<any>;
  carouselConfig: CarouselConfig = {
    grid: { xs: 3, sm: 4, md:5, lg: 6, all: 0 },
    load: 3,
    interval: {timing: 4000, initialDelay: 1000},
    loop: false,
    touch: true,
    velocity: 0.2,
    // showNavigation: false,
    showPagination: true,
  }
  carouselItems = [
    { name: "one"},
    { name: "two"},
    { name: "three"},
    { name: "four"},
    { name: "five"},
    { name: "six"},
    { name: "seven"},
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide) {
    // console.log("move to")
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
}
