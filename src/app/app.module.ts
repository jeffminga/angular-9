import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CarouselComponent } from './carousel-bak/carousel.component';
import { ServiceInputComponent } from './service-input/service-input.component';
import { ServiceOutputComponent } from './service-output/service-output.component';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from './carousel/carousel.module';
import { CarouselConsumerComponent } from './carousel-consumer/carousel-consumer.component';

@NgModule({
  declarations: [
    AppComponent,
    // CarouselComponent,
    ServiceInputComponent,
    ServiceOutputComponent,
    CarouselConsumerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
