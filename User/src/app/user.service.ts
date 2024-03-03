import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) { }

  getUsers(page: number=1): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}?page=${page}`);
  }
}
