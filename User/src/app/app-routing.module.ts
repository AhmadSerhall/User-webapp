import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { UserDetailsModule } from '../user-details.module';
import { UserDetailsComponent } from './user-details/user-details.component';
// import { Router } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  { path: '', component: AppComponent  },
  { path:'user-details/:id' , component: UserDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {}

