import { Pipe, PipeTransform } from '@angular/core';
import { Organization } from 'src/app/interfaces/organization';

@Pipe({
  name: 'nextThree'
})
export class NextThreePipe implements PipeTransform {

  transform(value: Array<Organization>, startIndex:number) {
    return value.filter((item:Organization, index: number)=>{
      if(index==startIndex*3||index ==startIndex*3+1||index == startIndex*3+2){
        return true;
      }
      return false;
    })
  }

}
