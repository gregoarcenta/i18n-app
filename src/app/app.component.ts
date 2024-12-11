import { Component, Inject, inject, Optional } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import {
  LanguageService,
  SERVER_LANG_TOKEN,
} from '@/services/language.service';

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

  constructor(
    @Optional()
    @Inject(SERVER_LANG_TOKEN)
    langServer: string,
  ) {
    // console.log({ cookie: this.cookie.get('lang') });
    const lang =
      langServer ??
      (this.cookie.check('lang') ? this.cookie.get('lang') : 'en');
    this.languageService.changeLanguage(lang);
  }
}
