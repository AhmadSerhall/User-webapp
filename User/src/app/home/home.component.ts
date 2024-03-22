import { Component,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardAnimationModule } from '../../card-animation.module';
import { cardAnimation } from '../../animations';
// import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserDetailsModule } from '../../user-details.module';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterModule,HeaderComponent,UserCardComponent,CommonModule,SpinnerComponent,UserDetailsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

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
