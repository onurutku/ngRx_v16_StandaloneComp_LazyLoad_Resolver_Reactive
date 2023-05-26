import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import Users from 'src/app/NGRX/models/users.model';
import DashboardRxJsService from '../services/dashboard-rxjs.service';
import { CommonModule } from '@angular/common';
import { _userMock } from '../../NGRX/mocks/user.mock';
import { _updateUser } from '../../NGRX/mocks/user.mock';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-rxjs',
  templateUrl: './dashboard-rxjs.component.html',
  styleUrls: ['./dashboard-rxjs.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class DashboardRxjsComponent {
  $users: Observable<Users[]> = this.service.convertToObservable();

  constructor(private service: DashboardRxJsService) {}
  removeUser(userId: number): void {
    this.service.removeUser(userId);
  }
  addNew(): void {
    this.service.addNewUser(_userMock);
  }
  updateUser(): void {
    this.service.updateUser(_updateUser);
  }
}
