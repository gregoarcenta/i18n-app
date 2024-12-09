import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageSelectComponent } from '@/components/language-select/language-select.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-basic-plan',
  imports: [LanguageSelectComponent, RouterLink],
  templateUrl: './basic-plan.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPlanComponent {}
