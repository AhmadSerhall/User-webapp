import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userData: any;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private location: Location) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        const userId = +idParam;
        this.userService.getUserById(userId).subscribe(
          (response: any) => {
            this.userData = response.data; 
          },
          (error) => {
            console.error('Error fetching user data:', error);
          }
        );
      } else {
        console.error('User ID not found in route parameters');
      }
    });
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
