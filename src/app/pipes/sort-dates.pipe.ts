import { Pipe, PipeTransform } from '@angular/core';
import { Rental } from '../models/rental';

@Pipe({
  name: 'sortDates',
})
export class SortDatesPipe implements PipeTransform {
  transform(rentals: Rental[]): Rental[] {
    return rentals.sort(
      (a, b) => new Date(b.rentDate).getTime() - new Date(a.rentDate).getTime()
    );
  }
}