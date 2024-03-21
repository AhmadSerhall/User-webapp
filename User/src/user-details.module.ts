import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,RouterOutlet } from '@angular/router';
import { UserDetailsComponent } from './app/user-details/user-details.component';
import  {AppRoutingModule}  from './app/app-routing.module';


@NgModule({
  declarations: [UserDetailsComponent],
  imports: [CommonModule,RouterModule,AppRoutingModule],
  exports: [UserDetailsComponent]
})
export class UserDetailsModule {}
