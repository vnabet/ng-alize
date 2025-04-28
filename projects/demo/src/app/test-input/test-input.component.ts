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

  clickHandler($event: MouseEvent) {
    const input = $event.currentTarget as HTMLElement;
    // Position de l'input dans le viewport
    const rect = input.getBoundingClientRect();
    // Position de l'input dans le document
    const top = rect.top + window.scrollY;
    const left = rect.left + window.scrollX;
    //Récupération de la taille de l'input
    const width = rect.width;
    const height = rect.height;

    // A partir de ces 4 je crée un tableau de 4 points
    const points = [
      { x: left, y: top },
      { x: left + width, y: top },
      { x: left + width, y: top + height },
      { x: left, y: top + height },
    ];
    console.log(points);

    // J'ajoute une div juste en dessous de l'input
    const div = document.createElement('div');
    div.classList.add('absolute', 'bg-red-500', 'w-10', 'h-10,');
    div.style.top = `${points[3].y}px`;
    div.style.left = `${points[3].x}px`;
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.zIndex = '1000';
    div.style.pointerEvents = 'none';
    div.innerText = 'Hello';
    // ajouter la div au body
    document.body.appendChild(div);
  }
}
