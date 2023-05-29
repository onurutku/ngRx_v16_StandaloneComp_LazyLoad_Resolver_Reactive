import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import Users from 'src/app/NGRX/models/users.model';
import DashboardSignalsService from '../services/dashboard-signals.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { _userMock } from '../../NGRX/mocks/user.mock';
import { _updateUser } from '../../NGRX/mocks/user.mock';

@Component({
  selector: 'app-dashboard-signals',
  templateUrl: './dashboard-signals.component.html',
  styleUrls: ['./dashboard-signals.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardSignalsComponent {
  $users: Observable<Users[]> = this.service.convertToObservable();
  constructor(private service: DashboardSignalsService) {}
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
