import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filterCars'
})
export class FilterCarsPipe implements PipeTransform {

  transform(cars: Car[], filterText:string): Car[] {
    var filterText = filterText?filterText.toLocaleLowerCase():"";
    return filterText?cars.filter(c=>c.name.toLocaleLowerCase().indexOf(filterText)!==-1):cars;
  }

}
