import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSelectComponent } from '@/components/language-select/language-select.component';

@Component({
  selector: 'app-products',
  imports: [RouterLink, LanguageSelectComponent],
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsComponent {}
