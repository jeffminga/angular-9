import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CarouselComponent } from './carousel-bak/carousel.component';
import { ServiceInputComponent } from './service-input/service-input.component';
import { ServiceOutputComponent } from './service-output/service-output.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from './carousel/carousel.module';
import { CarouselConsumerComponent } from './carousel-consumer/carousel-consumer.component';
import { InputsComponent } from './inputs/inputs.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // CarouselComponent,
    ServiceInputComponent,
    ServiceOutputComponent,
    CarouselConsumerComponent,
    InputsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
