import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import {
  AddNewUser,
  DashboardInitialState,
  RemoveUser,
  UpdateUser,
} from '../store/dashboard.actions';
import Users from '../models/users.model';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  constructor(
    private http: HttpClient,
    private store: Store<{ users: { users: Users[] } }>
  ) {
    this.getUsers();
  }
  getUsers(): void {
    this.http
      .get<Users[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((users: Users[]) => {
        this.store.dispatch(new DashboardInitialState(users));
      });
  }
  addNewUser(userMock: Users): Observable<Users> {
    return this.http
      .post<Users>('https://jsonplaceholder.typicode.com/users', userMock)
      .pipe(
        tap((response: any) => {
          this.store.dispatch(new AddNewUser(response));
        })
      );
  }
  removeUser(userId: number): Observable<any> {
    return this.http
      .delete('https://jsonplaceholder.typicode.com/users/' + userId)
      .pipe(
        tap((response) => {
          this.store.dispatch(new RemoveUser({ id: userId }));
        })
      );
  }
  updateUser(updateUser: Users) {
    return this.http
      .put(
        'https://jsonplaceholder.typicode.com/users/' + updateUser.id,
        updateUser
      )
      .pipe(
        tap((response) => {
          this.store.dispatch(new UpdateUser(updateUser));
        })
      );
  }
}
