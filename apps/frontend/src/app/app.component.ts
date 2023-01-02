import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MastHeadComponent } from './components/masthead.component';
import { NavigationComponent } from './components/navigation.component';

@Component({
  selector: 'ht-root',
  template: `
    <ht-mast-head></ht-mast-head>
    <main class="px-12">
      <ht-navigation></ht-navigation>
      <router-outlet></router-outlet>
    </main>
  `,
  standalone: true,
  imports: [MastHeadComponent, NavigationComponent, RouterOutlet],
})
export class AppComponent {}
