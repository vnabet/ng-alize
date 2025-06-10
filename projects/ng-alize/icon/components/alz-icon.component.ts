import { ChangeDetectionStrategy, Component, computed, effect, input, InputSignal } from '@angular/core';

const hostClassList = 'inline-block w-6 h-6 relative';

/**
 * Composant d'affichage d'icônes
 * Il utilise la police d'icônes Material Symbols
 */
@Component({
  selector: 'alz-icon',
  imports: [],
  template: `<span class="material-symbols-rounded absolute top-0 left-0" [class.filled]="filledBoolean()"
    ><ng-content></ng-content
  ></span>`,
  styles: `
    .filled {
      font-variation-settings: 'FILL' 1;
    }
  `,
  host: {
    class: hostClassList,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlzIconComponent {
  // Input pour définir si l'icône est remplie ou non
  readonly filled = input('false');

  protected readonly filledBoolean = computed(() => (this.filled() === 'false' ? false : true));

  constructor() {
    effect(() => {
      console.log('Icon filled state changed:', this.filled());
    });
  }
}
