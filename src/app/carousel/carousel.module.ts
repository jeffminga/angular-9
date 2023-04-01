import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  CarouselDefDirective,
  CarouselItemDirective,
  CarouselOutlet,
} from './carousel.directive';
import { Carousel } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    Carousel,
    CarouselItemComponent,
    CarouselItemDirective,
    CarouselDefDirective,
    CarouselOutlet
  ],
  declarations: [
    Carousel,
    CarouselItemComponent,
    CarouselItemDirective,
    CarouselDefDirective,
    CarouselOutlet,
  ]
})

// Local copy of https://github.com/uiuniversal/ngu-carousel
export class CarouselModule { }
