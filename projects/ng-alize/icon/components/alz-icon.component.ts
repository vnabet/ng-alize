import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Composant d'affichage d'icônes
 * Il utilise la police d'icônes Material Symbols
 */
@Component({
  selector: 'alz-icon',
  imports: [],
  template: `<span class="material-symbols-rounded absolute top-0 left-0" [class.filled]="filledBool()"
    ><ng-content></ng-content
  ></span>`,
  styles: `
    .filled {
      font-variation-settings: 'FILL' 1;
    }
  `,
  host: {
    class: 'inline-block w-6 h-6 relative',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlzIconComponent {
  // Input pour définir si l'icône est remplie ou non
  readonly filled = input('false');
  // Transforme la valeur de l'input filled en un booléen pour appliquer la classe CSS correspondante
  protected readonly filledBool = computed(() => this.filled() !== 'false');
}
