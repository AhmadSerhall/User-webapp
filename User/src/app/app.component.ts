import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,UserCardComponent,CommonModule,SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  loading=false;
  users: any[] = []; 
  constructor(private userService: UserService, private http: HttpClient) {}

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.userService.getUsers().subscribe(
        (response: any) => {
          console.log('API Response:', response);
          this.users = response.data;
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching users:', error);
          this.loading = false;
        }
      );
    }, 1000);
  }
}
