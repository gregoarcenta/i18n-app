import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageSelectComponent } from '@/components/language-select/language-select.component';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-basic-plan',
  imports: [LanguageSelectComponent, RouterLink, TranslatePipe],
  templateUrl: './basic-plan.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPlanComponent {}
