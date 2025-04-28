import { Component, effect, signal } from '@angular/core';
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
export class TestInputComponent {
  focused = signal(false);

  constructor() {
    effect(() => {
      console.log('TestInputComponent', this.focused());
    });
  }

  focusHandler() {
    const focused = this.focused();
    this.focused.set(!focused);
  }
}
