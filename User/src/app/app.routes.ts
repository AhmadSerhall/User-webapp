import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
export const routes: Routes = [
    { path: '', component: AppComponent  },
    { path:'user-details/:id' , component: UserDetailsComponent },
];
