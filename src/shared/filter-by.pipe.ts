import { Pipe, PipeTransform } from '@angular/core';
import { FilterObject } from '../models/FilterObject';
import { Character } from '../models/Character';

@Pipe({
  name: 'filterBy',
  pure: false,
  standalone: true,
})
export class FilterByPipe implements PipeTransform {
  transform(value: Character[], filterObject: FilterObject): Character[] {
    let newValue = [...value];
    newValue = value.filter((item: Character) => {
      const loweredName = item.name.toLocaleLowerCase();
      const loweredStatus = item.status.toLocaleLowerCase();
      const loweredSpecies = item.species.toLocaleLowerCase();

      if (
        filterObject.name &&
        !loweredName.includes(filterObject.name.toLocaleLowerCase())
      ) {
        return false;
      }
      if (
        filterObject.status &&
        !loweredStatus.includes(filterObject.status.toLocaleLowerCase())
      ) {
        return false;
      }
      if (
        filterObject.species &&
        !loweredSpecies.includes(filterObject.species.toLocaleLowerCase())
      ) {
        return false;
      }

      return true;
    });

    return newValue;
  }
}
