import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentCount } from '../state';
import { CounterCommands } from '../state/counter.actions';

@Component({
  selector: 'ht-feature-counter',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <section>
      <button class="btn btn-warning" (click)="decrement()">-</button>
      <span class="p-8 text-3xl">{{ current$ | async }}</span>
      <button class="btn btn-success" (click)="increment()">+</button>
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
}
