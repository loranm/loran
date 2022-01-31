import { Action, createReducer, on } from '@ngrx/store';
import * as fromCounterActions from './counter.actions';
import { initialState } from './counter.state';

export const counterReducer = createReducer(
  initialState,
  on(fromCounterActions.increaseCounter, (state): { value: number } => ({
    ...state,
    value: state.value + 1,
  })),
  on(fromCounterActions.decreaseCounter, (state) => ({
    ...state,
    value: state.value - 1,
  }))
);
