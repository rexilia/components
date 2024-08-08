import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DropdownComponent],
  template: ` <!-- <div style="width: 20rem">
    <input
      placeholder="Select country..."
      (focus)="showDrop = true"
      style="padding:1rem; background-color: aqua;"
    />
    <app-dropdown (getCountryDetails)="getDetails($event)"></app-dropdown>
  </div> -->
    <app-dropdown></app-dropdown>`,
  styles: '',
})
export class AppComponent {
  showDrop = false;
  title = 'handy-lists';
}
