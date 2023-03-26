import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    CardModule
  ],
  exports : [
    CarouselModule,
    CardModule
  ]
})
export class PrimengModule { }
