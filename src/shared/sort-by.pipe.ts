import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
  pure: false
})
export class SortByPipe implements PipeTransform {

  transform(value: any, filterObject: any): any {
    let newValue = [...value]
    newValue = value.filter((item:any)=> {
      const loweredName = item.name.toLocaleLowerCase()
      const loweredStatus = item.status.toLocaleLowerCase()
      const loweredSpecies = item.species.toLocaleLowerCase()

      if(filterObject.name && !loweredName.includes(filterObject.name.toLocaleLowerCase())){
        return false;
      }
      if(filterObject.status && !loweredStatus.includes(filterObject.status.toLocaleLowerCase())){
        return false;
      }
      if(filterObject.species && !loweredSpecies.includes(filterObject.species.toLocaleLowerCase())){
        return false;
      }

      return true;
    });
    return newValue;
  }

}
