import { Component } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DropdownComponent],
  template: ` <app-dropdown></app-dropdown> `,
})
export class AppComponent {
  showDrop = false;
  title = 'handy-lists';
}
