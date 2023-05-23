import Users from 'src/app/models/users.model';
import * as actionTypes from './dashboard.actions';
import { Action } from '@ngrx/store';

export interface UserState {
  users: Users[] | undefined | any;
}

const initialState: UserState = {
  users: undefined,
};
export const dataReducers = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.WRITE_INITIAL_STATE:
      return {
        users: (action as actionTypes.DashboardInitialState).payload,
      };
    case actionTypes.ADD_NEW_USER:
      return {
        ...state,
        users: [...state.users, (action as actionTypes.AddNewUser).payload],
      };
    case actionTypes.REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user: Users) => {
          return user.id !== (action as actionTypes.RemoveUser).payload.id;
        }),
      };
    case actionTypes.UPDATE_USER:
      const newUser = (action as actionTypes.UpdateUser).payload;
      const oldUsers = [...state.users];
      oldUsers[0] = newUser;
      return {
        ...state,
        users: oldUsers,
      };
    default:
      return state;
  }
};
