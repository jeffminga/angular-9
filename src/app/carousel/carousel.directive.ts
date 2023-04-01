import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[CarouselItem]'
})
export class CarouselItemDirective {}


@Directive({
  selector: '[CarouselPoint]'
})
export class CarouselPointDirective {}

@Directive({
  selector: '[carouselDef]'
})
export class CarouselDefDirective<T> {
  when: (index: number, nodeData: T) => boolean;

  constructor(public template: TemplateRef<any>) {}
}

@Directive({
  selector: '[carouselOutlet]'
})

export class CarouselOutlet {
  constructor(public viewContainer: ViewContainerRef) {}
}
