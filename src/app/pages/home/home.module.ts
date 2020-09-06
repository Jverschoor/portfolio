import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PagesRoutingModule } from '../pages-routing.module';
import { ParallaxStarBackgroundModule } from 'src/app/components/parallax-star-background/parallax-star-background.module';
import { ExperienceModule } from 'src/app/components/experience/experience.module';
import { GradientHeaderModule } from 'src/app/components/basic-header/basic-header.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ParallaxStarBackgroundModule,
    ExperienceModule,
    GradientHeaderModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
