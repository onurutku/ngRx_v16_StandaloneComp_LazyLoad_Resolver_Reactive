import { Action } from '@ngrx/store';
import Users from 'src/app/NGRX/models/users.model';

export const WRITE_INITIAL_STATE = 'WRITE INITIAL STATE';
export const ADD_NEW_USER = 'ADD NEW USER';
export const REMOVE_USER = 'REMOVE USER';
export const UPDATE_USER = 'UPDATE USER';

export class DashboardInitialState implements Action {
  readonly type = WRITE_INITIAL_STATE;
  constructor(public payload: Users[]) {}
}
export class AddNewUser implements Action {
  readonly type = ADD_NEW_USER;
  constructor(public payload: Users) {}
}
export class RemoveUser implements Action {
  readonly type = REMOVE_USER;
  constructor(public payload: { id: number }) {}
}
export class UpdateUser implements Action {
  readonly type = UPDATE_USER;
  constructor(public payload: Users) {}
}

export type UserActions =
  | DashboardInitialState
  | AddNewUser
  | RemoveUser
  | UpdateUser;
