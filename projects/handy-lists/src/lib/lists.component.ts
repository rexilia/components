import { Component, output } from '@angular/core';
import { countries } from '../utils/countries';
import { ICountryList } from '../utils/interface';
import { FilterPipe } from '../utils/search.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'handy-lists',
  standalone: true,
  imports: [FilterPipe, CommonModule],
  template: `
    <div
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
      @if(json; as data){@for(c of data | filter: searchText;track c){
      <div (click)="getValue(c)" class="list">
        <img
          [src]="c.image"
          alt="{{ name }}"
          style="width:1.5rem;height:1.5rem"
        />
        <div style="margin-left: 0.25rem;">{{ c.name }}</div>
      </div>
      } }
    </div>
  `,
  styles: `
  .list{
    display:flex;
    align-items: center;
    cursor:pointer;
}

.list:hover{
background-color: rgba(0, 0, 0, 0.1);;
}
  `,
})
export class ListsComponent {
  json!: { [key: string]: string }[];
  searchText!: string;
  name: string = '';
  getCountryDetails = output<any>();

  constructor() {}
  ngOnInit(): void {
    this.json = countries.countries;
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
