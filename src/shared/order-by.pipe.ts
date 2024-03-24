import { Pipe, PipeTransform } from '@angular/core';
import { SortDirection, SortTerm } from '../enums/SortAndFilter.enum';
import { Character } from '../models/Character';

@Pipe({
  name: 'orderBy',
  pure: false,
})
export class OrderByPipe implements PipeTransform {
  transform(
    value: Character[],
    direction: SortDirection,
    sortTerm: SortTerm,
  ): Character[] {
    if (sortTerm === null) {
      return value;
    }

    switch (sortTerm) {
      case SortTerm.STATUS:
      case SortTerm.NAME:
      case SortTerm.SPECIES:
        return value.sort((a: Character, b: Character) => {
          const loweredA = a[sortTerm].toLocaleLowerCase();
          const loweredB = b[sortTerm].toLocaleLowerCase();
          if (loweredA > loweredB) {
            return direction === SortDirection.ASC ? 1 : -1;
          }
          if (loweredB > loweredA) {
            return direction === SortDirection.ASC ? -1 : 1;
          }
          return 0;
        });

      case SortTerm.EPISODES:
        return value.sort((n1, n2) => {
          if (direction === SortDirection.ASC) {
            return n1.episode.length - n2.episode.length;
          }
          return n2.episode.length - n1.episode.length;
        });
      default:
        return value;
    }
  }
}
