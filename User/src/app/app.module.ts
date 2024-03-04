import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; 
import { UserCardComponent } from './user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { User } from '../user';
import { SpinnerComponent } from './spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardAnimationModule } from '../card-animation.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserCardComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardAnimationModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
