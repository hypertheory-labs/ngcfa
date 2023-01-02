import { Routes } from '@angular/router';
import { AboutComponent } from './containers/about.component';
import { HomeComponent } from './containers/home.component';

export const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'home' },
];
