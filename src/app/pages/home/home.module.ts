import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PagesRoutingModule } from '../pages-routing.module';
import { ParallaxStarBackgroundModule } from 'src/app/components/parallax-star-background/parallax-star-background.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ParallaxStarBackgroundModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
