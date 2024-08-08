import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], searchText: string): any {
    if (!searchText) return value;
    return value.filter((f) =>
      f.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
