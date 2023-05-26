import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Users from 'src/app/NGRX/models/users.model';

@Injectable({ providedIn: 'root' })
export default class DashboardRxJsService {
  $stateHolder: BehaviorSubject<Users[]> = new BehaviorSubject<Users[]>([]);
  constructor(private http: HttpClient) {
    this.getUsers();
  }
  getUsers(): void {
    this.http
      .get<Users[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((users: Users[]) => {
        this.$stateHolder.next(users);
      });
  }
  addNewUser(userMock: Users): void {
    this.http
      .post<Users>('https://jsonplaceholder.typicode.com/users', userMock)
      .subscribe(() => {
        const currentUsers: Users[] = this.$stateHolder.getValue();
        currentUsers.push(userMock);
        this.$stateHolder.next(currentUsers);
      });
  }
  removeUser(userId: number): void {
    this.http
      .delete<number>('https://jsonplaceholder.typicode.com/users/' + userId)
      .subscribe(() => {
        const currentUsers: Users[] = this.$stateHolder.getValue();
        const indexWillRemove = currentUsers.findIndex(
          (user) => user.id === userId
        );
        currentUsers.splice(indexWillRemove, 1);
        this.$stateHolder.next(currentUsers);
      });
  }
  updateUser(updateUser: Users): void {
    this.http
      .put<Users>(
        'https://jsonplaceholder.typicode.com/users/' + updateUser.id,
        updateUser
      )
      .subscribe(() => {
        const currentUsers: Users[] = this.$stateHolder.getValue();
        currentUsers[0] = updateUser;
        this.$stateHolder.next(currentUsers);
      });
  }
  convertToObservable(): Observable<Users[]> {
    return this.$stateHolder.asObservable();
  }
}
