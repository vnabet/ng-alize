import { AfterViewInit, Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[alzTest]',
})
export class AlzTestDirective implements AfterViewInit {
  readonly #el = inject(ElementRef);
  readonly alzTest = input('VINCENT');

  ngAfterViewInit() {
    console.log('ngAfterViewInit TEST', this.alzTest());
    if (this.alzTest() === 'titi') {
      this.#el.nativeElement.classList.add('bg-orange-500');
    }
  }
}
