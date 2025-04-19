import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'alz-icon',
  imports: [],
  template: `<span class="material-symbols-rounded"><ng-content></ng-content></span>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlzIconComponent {}
