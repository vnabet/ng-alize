import { Component } from '@angular/core';
import { AlzIconComponent } from 'ng-alize/icon';
import { AlzButtonDirective } from 'ng-alize/button';

@Component({
  selector: 'app-root',
  imports: [AlzIconComponent, AlzButtonDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
