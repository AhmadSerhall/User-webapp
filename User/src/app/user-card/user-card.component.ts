import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() userData: any ;
  constructor(private router: Router) {}

  // navigateToDetails(id: number) {
  //   this.router.navigate(['/user-details', id]);
  // }
}
