import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSelectComponent } from '@/components/language-select/language-select.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  imports: [RouterLink, LanguageSelectComponent, TranslatePipe],
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsComponent {
  fullName = signal('Gregory Arcentales');
}
