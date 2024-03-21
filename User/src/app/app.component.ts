import { Component,OnInit } from '@angular/core';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardAnimationModule } from '../card-animation.module';
import { cardAnimation } from '../animations';
import { Router } from '@angular/router';
import { UserDetailsModule } from '../user-details.module';
import { RouterModule } from '@angular/router';
import  {AppRoutingModule}  from './app-routing.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,UserCardComponent,CommonModule,SpinnerComponent,UserDetailsModule,RouterModule,AppRoutingModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    cardAnimation
  ]
})
export class AppComponent implements OnInit{
  loading=false;
  users: any[] = []; 
  constructor(private userService: UserService, private http: HttpClient,private router: Router) {}

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.userService.getUsers().subscribe(
        (response: any) => {
          this.users = response.data;
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching users:', error);
          this.loading = false;
        }
      );
    }, 2000);
  }
  navigateToDetails(id: number) {
    this.router.navigate(['/user-details', id]);
  }
}
