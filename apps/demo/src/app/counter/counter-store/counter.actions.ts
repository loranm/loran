import { createAction } from '@ngrx/store';

enum CounterAction {
  INCREASE = '[Counter Page] increase',
  DECREASE = '[Counter Page] decrease',
}

export const increaseCounter = createAction(CounterAction.INCREASE);
export const decreaseCounter = createAction(CounterAction.DECREASE);
