import { createReducer, on } from '@ngrx/store';
import { loadManagersSuccess } from './manager.action';
import { User } from 'src/app/shared/interfaces/user.interface';



export interface ManagersState {
  managers: User[];
}

export const initialManagersState: ManagersState = {
  managers: []
};

export const managersReducer = createReducer(
  initialManagersState,
  on(loadManagersSuccess, (state, { managers }) => ({
    ...state,
    managers
  }))
);
