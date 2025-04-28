import { Component } from '@angular/core';
import { AlzIconComponent } from 'ng-alize/icon';
import { AlzButtonDirective } from 'ng-alize/button';
import { TestInputComponent } from './test-input/test-input.component';

@Component({
  selector: 'app-root',
  imports: [AlzIconComponent, AlzButtonDirective, TestInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
