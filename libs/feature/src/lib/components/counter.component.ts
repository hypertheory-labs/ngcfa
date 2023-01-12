import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentCount } from '../state';
import { CounterCommands } from '../state/counter.actions';
import { ButtonDirective } from '@ht/ui';
@Component({
  selector: 'ht-feature-counter',
  standalone: true,
  imports: [AsyncPipe, ButtonDirective],
  template: `
    <section>
      <button htUiButton variant="warning" (click)="decrement()">-</button>
      <span htUiLabel>{{ current$ | async }}</span>
      <button htUiButton variant="primary" (click)="increment()">+</button>
    </section>
  `,
})
export class FeatureCounterComponent {
  store = inject(Store);
  current$ = this.store.select(selectCurrentCount);
  increment() {
    this.store.dispatch(CounterCommands.countIncremented());
  }
  decrement() {
    this.store.dispatch(CounterCommands.countDecremented());
  }

  reset() {
    this.store.dispatch(CounterCommands.countReset());
  }
}
