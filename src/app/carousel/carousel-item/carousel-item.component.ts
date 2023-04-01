import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'carousel-item',
  templateUrl: 'carousel-item.component.html',
  styleUrls: ['carousel-item.component.scss']
})
export class CarouselItemComponent {
  @HostBinding('class.item') classes = true;
}
