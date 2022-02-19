import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterFeatureKey, CounterState } from './counter.state';

export const selectFeature =
  createFeatureSelector<CounterState>(counterFeatureKey);

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: CounterState) => state.value
);
