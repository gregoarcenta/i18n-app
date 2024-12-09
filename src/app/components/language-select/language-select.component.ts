import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-language-select',
  imports: [],
  templateUrl: './language-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectComponent {
  public languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);
}
