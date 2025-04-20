import { ChangeDetectionStrategy, Component, computed, effect, input } from '@angular/core';

@Component({
  selector: 'alz-icon',
  imports: [],
  template: `<span class="material-symbols-rounded" [class.filled]="filledBool()"><ng-content></ng-content></span>`,
  styles: `
    .filled {
      font-variation-settings: 'FILL' 1;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlzIconComponent {
  readonly filled = input('false');
  protected readonly filledBool = computed(() => this.filled() !== 'false');
}
