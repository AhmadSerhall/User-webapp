import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  // title = 'User';
  users: any[] = []; 
  constructor(private userService: UserService, private http: HttpClient) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((response: any) => {
      this.users = response.data; 
    });
  }
}
