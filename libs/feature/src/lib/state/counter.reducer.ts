import { createReducer, on } from '@ngrx/store';
import { CounterCommands } from './counter.actions';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const reducers = createReducer(
  initialState,
  on(CounterCommands.countReset, () => initialState),
  on(CounterCommands.countIncremented, (s) => ({ ...s, count: s.count + 1 })),
  on(CounterCommands.countDecremented, (s) => ({ ...s, count: s.count - 1 }))
);
