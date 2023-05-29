import { ChangeDetectionStrategy, Component, DestroyRef } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import Users from '../models/users.model';
import { Observable } from 'rxjs';
import { _userMock } from '../mocks/user.mock';
import { _updateUser } from '../mocks/user.mock';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ngrx-dashboard',
  templateUrl: './dashboard-ngrx.component.html',
  styleUrls: ['./dashboard-ngrx.component.scss'],
  standalone: true,
  providers: [],
  imports: [CommonModule, HttpClientModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardNgrxComponent {
  $users: Observable<any> = this.store.select('users');

  constructor(
    private store: Store<{ users: { users: Users[] } }>,
    private service: DashboardService,
    private readonly destroyRef: DestroyRef
  ) {}
  addNew(): void {
    this.service
      .addNewUser(_userMock)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
  removeUser(userId: number) {
    this.service
      .removeUser(userId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
  updateUser() {
    this.service
      .updateUser(_updateUser)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
