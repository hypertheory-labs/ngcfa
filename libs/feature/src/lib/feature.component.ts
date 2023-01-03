import { Component } from '@angular/core';
import { FeatureCounterComponent } from './components/counter.component';

@Component({
  selector: 'ht-feature',
  standalone: true,
  template: ` <ht-feature-counter></ht-feature-counter> `,
  imports: [FeatureCounterComponent],
})
export class FeatureComponent {}
