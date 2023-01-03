import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromCounter from './counter.reducer';
export const FEATURE_NAME = 'feature';

export interface FeatureState {
  counter: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<FeatureState> = {
  counter: fromCounter.reducers,
};

// Create a feature Selector.
const selectFeature = createFeatureSelector<FeatureState>(FEATURE_NAME);

// Create a selector for the counter branch

const selectCounterBranch = createSelector(selectFeature, (f) => f.counter);

// TODO:  A selector that returns the current count for the counter component.

export const selectCurrentCount = createSelector(
  selectCounterBranch,
  (b) => b.count
);
