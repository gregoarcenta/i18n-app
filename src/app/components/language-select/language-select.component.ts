import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { LanguageService } from '@/services/language.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-language-select',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './language-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectComponent {
  private readonly languageService = inject(LanguageService);

  public currentLang = computed(() => this.languageService.currentLang());

  public selectLangForm = new FormControl(this.currentLang());

  public languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  changeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    this.languageService.changeLanguage(lang);
  }
}
