import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import  {AppRoutingModule}  from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterModule,AppRoutingModule,CommonModule,RouterLink],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() userData: any ;
  constructor(private router: Router) {}

  navigateToDetails(id: number) {
    console.log('Navigating to user details with ID:', id);
    this.router.navigate(['user-details', id]); 
  }
}
