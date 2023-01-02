import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'ht-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="grid place-items-center">
      <div class="tabs ">
        <a
          class="tab tab-bordered"
          [routerLinkActive]="['tab-active']"
          routerLink="home"
          >Home</a
        >
        <a
          class="tab tab-bordered"
          [routerLinkActive]="['tab-active']"
          routerLink="about"
          >About</a
        >
        <a class="tab tab-bordered">Feature</a>
      </div>
    </nav>
  `,
})
export class NavigationComponent {}
