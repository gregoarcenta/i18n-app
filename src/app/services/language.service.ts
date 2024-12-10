import { inject, Injectable, signal } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly cookie = inject(SsrCookieService);
  private readonly translate = inject(TranslateService);

  public currentLang = signal<string>('');

  changeLanguage(lang: string) {
    this.cookie.set('lang', lang);
    // this.translate.setDefaultLang('en');
    // this.translate.use(lang);
    this.currentLang.set(lang);
  }
}
