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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
