import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import Users from 'src/app/NGRX/models/users.model';
@Injectable({ providedIn: 'root' })
export default class DashboardSignalsService {
  $stateSignal: WritableSignal<Users[]> = signal([]);
  constructor(private http: HttpClient) {
    this.getUsers();
  }
  getUsers(): void {
    this.http
      .get<Users[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((users: Users[]) => {
        this.$stateSignal.set(users);
      });
  }
  addNewUser(userMock: Users): void {
    this.http
      .post<Users>('https://jsonplaceholder.typicode.com/users', userMock)
      .subscribe(() => {
        const currentUsers: Users[] = this.$stateSignal();
        currentUsers.push(userMock);
        this.$stateSignal.set(currentUsers);
      });
  }
  removeUser(userId: number): void {
    this.http
      .delete<number>('https://jsonplaceholder.typicode.com/users/' + userId)
      .subscribe(() => {
        const currentUsers: Users[] = this.$stateSignal();
        const indexWillRemove = currentUsers.findIndex(
          (user) => user.id === userId
        );
        currentUsers.splice(indexWillRemove, 1);
        this.$stateSignal.set(currentUsers);
      });
  }
  updateUser(updateUser: Users): void {
    this.http
      .put<Users>(
        'https://jsonplaceholder.typicode.com/users/' + updateUser.id,
        updateUser
      )
      .subscribe(() => {
        const currentUsers: Users[] = this.$stateSignal();
        currentUsers[0] = updateUser;
        this.$stateSignal.set(currentUsers);
      });
  }
  convertToObservable(): Observable<Users[]> {
    return toObservable(this.$stateSignal);
  }
}
