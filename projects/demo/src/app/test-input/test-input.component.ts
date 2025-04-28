import { AfterViewInit, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-test-input',
  imports: [],
  templateUrl: './test-input.component.html',
  styleUrl: './test-input.component.css',
  animations: [
    trigger('focus', [
      // Define your animation states and transitions here
      // For example:
      state('focused', style({ top: '-20px' })),
      state('blurred', style({ top: '0' })),
      transition('focused <=> blurred', animate('50ms ease-in-out')),
    ]),
  ],
})
export class TestInputComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;

  protected readonly focused = signal(false);
  #input: HTMLInputElement | null = null;

  ngAfterViewInit() {
    // Je cherche si le container contient un input
    this.#input = this.container.nativeElement.querySelector('input');
  }

  focusHandler() {
    const focused = this.focused();
    const value = this.#input?.value;
    if (value) {
      this.focused.set(true);
    } else {
      this.focused.set(!focused);
    }
  }
}
