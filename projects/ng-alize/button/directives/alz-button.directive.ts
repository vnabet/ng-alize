import { Directive, ElementRef, inject } from '@angular/core';
import { AlzTestDirective } from 'ng-alize/button/directives/alz-test.directive';

@Directive({
  selector: '[alzButton]',
  hostDirectives: [
    {
      directive: AlzTestDirective,
      inputs: ['alzTest'],
    },
  ],
})
export class AlzButtonDirective {
  readonly #el = inject(ElementRef);

  constructor() {
    const tagName = this.#el.nativeElement.tagName.toLowerCase();
    if (tagName !== 'button' && tagName !== 'a') throw new Error('alzButton can only be used on button or a elements');

    this.#baseStyle();
  }

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
