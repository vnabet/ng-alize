import { AfterViewInit, Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[alzButton]',
})
export class AlzButtonDirective implements AfterViewInit {
  readonly #el = inject(ElementRef);

  readonly alzButton = input('toto');

  constructor() {
    const tagName = this.#el.nativeElement.tagName.toLowerCase();
    if (tagName !== 'button' && tagName !== 'a') throw new Error('alzButton can only be used on button or a elements');

    this.#baseStyle();
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.alzButton());
    this.#el.nativeElement.classList.add('bg-orange-500');
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
