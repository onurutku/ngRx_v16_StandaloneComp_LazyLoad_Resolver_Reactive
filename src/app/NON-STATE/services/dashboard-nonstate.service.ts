import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Users from 'src/app/NGRX/models/users.model';
@Injectable({
  providedIn: 'root',
})
export default class DashboardNonStateService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users');
  }
  addNewUser(userMock: Users): Observable<Users> {
    return this.http.post<Users>(
      'https://jsonplaceholder.typicode.com/users',
      userMock
    );
  }
  removeUser(userId: number): Observable<number> {
    return this.http.delete<number>(
      'https://jsonplaceholder.typicode.com/users/' + userId
    );
  }
  updateUser(updateUser: Users): Observable<Users> {
    return this.http.put<Users>(
      'https://jsonplaceholder.typicode.com/users/' + updateUser.id,
      updateUser
    );
  }
}
