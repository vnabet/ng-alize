import { Directive, ElementRef, inject } from '@angular/core';
import { AlzColorDirective } from 'ng-alize/core';

/**
 * Directive d'affichage des boutons sur les composants Alizé
 * @see AlzColorDirective
 */
@Directive({
  selector: '[alzButton]',
  // Composition de la directive AlzButtonDirective avec la directive AlzColorDirective
  hostDirectives: [
    {
      directive: AlzColorDirective,
      inputs: ['alzColor'],
    },
  ],
})
export class AlzButtonDirective {
  // Référence à l'élément DOM
  readonly #el = inject(ElementRef);

  constructor() {
    // Vérifie si l'élément est un bouton ou un lien
    const tagName = this.#el.nativeElement.tagName.toLowerCase();
    if (tagName !== 'button' && tagName !== 'a') throw new Error('alzButton can only be used on button or a elements');

    this.#baseStyle();
  }

  /**
   * Style de base pour les boutons
   * @private
   */
  #baseStyle() {
    this.#el.nativeElement.classList.add(
      'bg-blue-500',
      'text-white',
      'py-2',
      'px-4',
      'rounded-lg',
      'inline-flex',
      'align-center',
      'gap-2',
      'cursor-pointer',
      'font-bold',
    );
  }
}
