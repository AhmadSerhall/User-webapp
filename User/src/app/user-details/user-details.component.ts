import { Component,inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  // standalone:true,
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  // imports:[CommonModule]
})
export class UserDetailsComponent implements OnInit {
  id: number | null = null;

  constructor(private route: ActivatedRoute) {}

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
