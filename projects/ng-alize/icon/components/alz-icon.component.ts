import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Composant d'affichage d'icônes
 * Il utilise la police d'icônes Material Symbols
 */
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
  // Input pour définir si l'icône est remplie ou non
  readonly filled = input('false');
  // Transforme la valeur de l'input filled en un booléen pour appliquer la classe CSS correspondante
  protected readonly filledBool = computed(() => this.filled() !== 'false');
}
