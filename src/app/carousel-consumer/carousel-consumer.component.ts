import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { CarouselConfig } from '../carousel/carousel/carousel';

@Component({
  selector: 'app-carousel-consumer',
  templateUrl: './carousel-consumer.component.html',
  styleUrls: ['./carousel-consumer.component.scss']
})
export class CarouselConsumerComponent implements AfterViewInit {
  withAnim = true;
  resetAnim = true;

  carouselConfig: CarouselConfig = {
    grid: { xs: 1, sm: 1, md:2, lg: 3, all: 0 },
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
    // { name: "four"},
    // { name: "five"},
    // { name: "six"},
    // { name: "seven"},
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
