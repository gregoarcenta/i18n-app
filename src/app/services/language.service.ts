import { inject, Injectable, InjectionToken, signal } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { TranslateService } from '@ngx-translate/core';

export const SERVER_LANG_TOKEN = new InjectionToken<string>(
  'SERVER_LANG_TOKEN',
);

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly cookie = inject(SsrCookieService);
  private readonly translate = inject(TranslateService);
  private readonly langServer = inject(SERVER_LANG_TOKEN, { optional: true });

  public currentLang = signal(this.langServer);

  changeLanguage(lang: string) {
    // console.log({ lang });
    this.cookie.set('lang', lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.currentLang.set(lang);
  }
}
