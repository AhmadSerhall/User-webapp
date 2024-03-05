import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: AppComponent,  pathMatch: 'full'  },
  { path: 'user-details/:id', component: UserDetailsComponent , title:'details page'}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
