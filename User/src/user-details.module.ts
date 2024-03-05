import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './app/user-details/user-details.component';

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [CommonModule],
  exports: [UserDetailsComponent]
})
export class UserDetailsModule {}
