import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  CarouselDefDirective,
  CarouselItemDirective,
  CarouselNextDirective,
  CarouselOutlet,
  CarouselPointDirective,
  CarouselPrevDirective
} from './carousel.directive';
import { Carousel } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    Carousel,
    CarouselItemComponent,
    CarouselPointDirective,
    CarouselItemDirective,
    CarouselNextDirective,
    CarouselPrevDirective,
    CarouselDefDirective,
    CarouselOutlet
  ],
  declarations: [
    Carousel,
    CarouselItemComponent,
    CarouselPointDirective,
    CarouselItemDirective,
    CarouselNextDirective,
    CarouselPrevDirective,
    CarouselDefDirective,
    CarouselOutlet
  ]
})

// Local copy of https://github.com/uiuniversal/ngu-carousel
export class CarouselModule { }
