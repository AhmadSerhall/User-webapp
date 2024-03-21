import { Component,inject, OnInit } from '@angular/core';
import { Route ,RouterLink,RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import  {AppRoutingModule}  from '../app-routing.module';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
 

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  id: number | null = null;
  
  constructor(private route: ActivatedRoute, private userService: UserService,
    private location: Location) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      console.log('Route parameters:', params); 
      console.log('Extracted ID:', idParam);
      if (idParam !== null) {
        this.id = +idParam; 
        console.log('User ID:', this.id);
      } else {
        console.error('User ID not found in route parameters');
      }
    });
  }
}
