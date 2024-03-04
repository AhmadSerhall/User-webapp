import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { cardAnimation } from './animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    
    
  ],
  exports: [
    BrowserAnimationsModule
  ]
})
export class CardAnimationModule { }
