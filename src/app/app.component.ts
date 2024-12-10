import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { LanguageService } from '@/services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [LanguageService],
  template: `
    <div class="max-w-screen-xl mx-auto">
      <router-outlet />
    </div>
  `,
})
export class AppComponent {
  private readonly cookie = inject(SsrCookieService);
  private readonly languageService = inject(LanguageService);

  constructor() {
    console.log({ cookie: this.cookie.get('lang') });
    const lang = this.cookie.get('lang') ?? 'es';
    this.languageService.changeLanguage(lang);
  }
}
