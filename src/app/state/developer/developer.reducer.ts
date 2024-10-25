import { createReducer, on } from '@ngrx/store';
import { loadDeveloperSuccess} from './developer.action';
import { User } from 'src/app/shared/interfaces/user.interface';



export interface DeveloperState {
  developers: User[];
}

export const initialDeveloperState: DeveloperState = {
  developers: []
};

export const developerReducer = createReducer(
  initialDeveloperState,
  on(loadDeveloperSuccess, (state, { developers }) => ({
    ...state,
    developers
  }))
);
