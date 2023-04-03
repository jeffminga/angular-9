import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';
import { Carousel } from './carousel/carousel.component';
import { CarouselModule } from './carousel.module';
import { CarouselConfig } from './carousel/carousel';


export default {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
    //   declarations: [TaskListComponent, CarouselItemComponent],
      imports: [CarouselModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(story => `<div style="margin: 3em;">${story}</div>`),
  ],
} as Meta;



const Template: Story<CarouselConfig> = (args) => {

  console.log("template args", args);
  
  return {
    component: Carousel,
    props: {
      carouselConfig: {
        grid: { xs: 3, sm: 4, md:5, lg: 6, all: 0 },
        load: 3,
        interval: {timing: 4000, initialDelay: 1000},
        loop: false,
        touch: true,
        velocity: 0.2,
        ...args,
      },
      carouselItems: [
          { name: "one"},
          { name: "two"},
          { name: "three"},
          { name: "four"},
          { name: "five"},
          { name: "six"},
          { name: "seven"},
      ],

    },
    template: `<app-carousel [config]="carouselConfig" [dataSource]="carouselItems">
        <app-carousel-item *carouselDef="let item; let j = index">
            <div [style]="'height: 200px; background-color: lightgrey; margin: 0 10px'">{{item.name}}</div>
        </app-carousel-item>
    </app-carousel>`,

  }
};

export const Default = Template.bind({});
Default.args = {
  showPagination: true,
  showNavigation: true,
};
Default.parameters = {
  controls: {
      include: Object.keys(Default.args),
  },
}


