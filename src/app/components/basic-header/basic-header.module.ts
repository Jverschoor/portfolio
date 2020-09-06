import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradientHeaderComponent } from './basic-header.component';



@NgModule({
  declarations: [GradientHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GradientHeaderComponent
  ]
})
export class GradientHeaderModule { }
