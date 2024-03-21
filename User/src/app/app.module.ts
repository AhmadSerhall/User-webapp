import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import  {AppRoutingModule}  from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; 
import { UserCardComponent } from './user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { User } from '../user';
import { SpinnerComponent } from './spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardAnimationModule } from '../card-animation.module';
import { UserDetailsModule } from '../user-details.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { provideRouter } from '@angular/router';

@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardAnimationModule,
    UserDetailsModule,
    Router,
    RouterModule.forRoot(routes)

    
    
    
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    UserCardComponent,
    SpinnerComponent,
    UserDetailsComponent,
    UserDetailsModule,
    
  ],

  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
