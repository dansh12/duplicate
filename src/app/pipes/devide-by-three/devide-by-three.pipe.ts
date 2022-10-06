import { Pipe, PipeTransform } from '@angular/core';
import { Organization } from 'src/app/interfaces/organization';

@Pipe({
  name: 'devideByThree'
})
export class DevideByThreePipe implements PipeTransform {

  transform(value: Array<Organization>) {
    if(value.length %1===0){
      return value.filter((item: Organization, index: number) => {
        if (index < (value.length) / 3) {
          return true;
        }
        return false;
      })
    }else{
    return value.filter((item: Organization, index: number) => {
      if (index < ((value.length) / 3 ) + 1) {
        return true;
      }
      return false;
    })}
  }
}
