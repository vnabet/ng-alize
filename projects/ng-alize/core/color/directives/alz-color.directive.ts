import { AfterViewInit, Directive, ElementRef, inject, input } from '@angular/core';

/**
 * Directive de gestion des couleurs sur les composants Alizé
 */
@Directive({
  selector: '[alzColor]',
})
export class AlzColorDirective implements AfterViewInit {
  // Référence à l'élément DOM
  readonly #el = inject(ElementRef);
  // Valeur passée à la directive
  readonly alzColor = input('VINCENT');

  // Nom de la balise de l'élément sur lequel la directive est appliquée
  readonly #tagName = this.#el.nativeElement.tagName.toUpperCase();
  // Vérifie si la directive alzButton est présente
  readonly #hasButtonDirective = this.#el.nativeElement.hasAttribute('alzButton');

  ngAfterViewInit() {
    console.log('ngAfterViewInit COLOR', this.alzColor(), this.#tagName, this.#hasButtonDirective);
    if (this.alzColor() === 'titi') {
      this.#el.nativeElement.classList.add('bg-orange-500');
    }
  }
}
