import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Users from 'src/app/NGRX/models/users.model';
import DashboardNonStateService from '../services/dashboard-nonstate.service';
import { _userMock } from 'src/app/NGRX/mocks/user.mock';
import { _updateUser } from 'src/app/NGRX/mocks/user.mock';

@Component({
  selector: 'app-dashboard-nonstate',
  styleUrls: ['./dashboard-nonstate.component.scss'],
  templateUrl: './dashboard-nonstate.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardNonStateComponent implements OnInit {
  users!: Users[];
  constructor(
    private service: DashboardNonStateService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.service.getUsers().subscribe((users: Users[]) => {
      this.users = users;
      this.ref.detectChanges(); //!!srategy has been set to onPush,so we need to use manual detection mechanism for 'user' variable
    });
  }
  removeUser(userId: number): void {
    this.service.removeUser(userId).subscribe(() => {
      this.getUsers();
    });
  }
  addNew(): void {
    this.service.addNewUser(_userMock).subscribe(() => {
      this.getUsers();
    });
  }
  updateUser(): void {
    this.service.updateUser(_updateUser).subscribe(() => {
      this.getUsers();
    });
  }
}
