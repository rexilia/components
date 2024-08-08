import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FilterPipe } from '../common-utils/filter.pipe';
import { ICountryList } from '../common-utils/interfaces';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FilterPipe],
  template: `<div
    style="height: 20rem;overflow-y: scroll;padding: 0.5rem;background-color: whitesmoke;width:inherit;border-radius: 0 0 0.25rem 0.25rem;"
  >
    <input
      type="text"
      id="search"
      placeholder="Search Country..."
      autocomplete="off"
      (input)="getSearchText()"
      style="border-radius: 0.25rem;top:0;position:sticky; border: 1px solid grey; padding: 0.25rem;width:90%;margin-bottom: 0.25rem"
    />
    @if(json | async; as data){@for(c of data.countries | filter:
    searchText;track c){
    <div (click)="getValue(c)" class="list">
      <img
        [src]="c.image"
        alt="{{ name }}"
        style="width:1.5rem;height:1.5rem"
      />
      <div style="margin-left: 0.25rem;">{{ c.name }}</div>
    </div>
    } }
  </div>`,
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  json!: Observable<any>;
  searchText!: string;
  name: string = '';
  getCountryDetails = output<any>();

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.json = this.http.get('assets/utils/countries.json');
  }

  getValue(country: ICountryList) {
    const data = {
      name: country.name,
      dial_code: country.dial_code,
      flag: country.image,
      countryCode: country.unicode,
    };
    this.getCountryDetails.emit(data);
  }

  getSearchText() {
    const element = document.getElementById('search') as HTMLInputElement;
    this.searchText = element.value;
  }
}
