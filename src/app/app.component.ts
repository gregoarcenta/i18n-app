import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="max-w-screen-xl mx-auto">
      <router-outlet />
    </div>
  `,
})
export class AppComponent {}
