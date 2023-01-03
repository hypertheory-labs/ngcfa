import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { FeatureComponent } from './feature.component';
import { FEATURE_NAME, reducers } from './state';

export const FEATURE_ROUTES: Routes = [
  {
    path: '',
    component: FeatureComponent,
    providers: [provideState(FEATURE_NAME, reducers)],
  },
];
