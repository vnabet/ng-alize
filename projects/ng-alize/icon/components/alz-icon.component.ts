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
  readonly filled: InputSignal<unknown> = input(false as unknown);

  // Champ calculé pour déterminer l'état rempli de l'icône
  protected readonly filledBoolean = computed(() => {
    const type = typeof this.filled();
    let result: boolean;
    switch (type) {
      // Pour le type boolean, on retourne directement la valeur
      case 'boolean':
        result = this.filled() as boolean;
        break;
      // Pour le type string, on considère 'false' comme false et tout autre valeur comme true
      case 'string':
        result = this.filled() !== 'false';
        break;
      default:
        // Pour tout autre type, on retourne false
        result = true;
        break;
    }
    return result;
  });

  constructor() {
    effect(() => {
      console.log('Icon filled state changed:', this.filled());
    });
  }
}
