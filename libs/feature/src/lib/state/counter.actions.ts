import { createActionGroup, emptyProps } from '@ngrx/store';

export const CounterCommands = createActionGroup({
  source: 'Counter Component',
  events: {
    'Count Incremented': emptyProps(),
    'Count Decremented': emptyProps(),
    'Count Reset': emptyProps(),
  },
});
