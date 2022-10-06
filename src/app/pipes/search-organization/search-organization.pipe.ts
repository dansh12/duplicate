import { Pipe, PipeTransform } from '@angular/core';
import { Organization } from 'src/app/interfaces/organization';

@Pipe({
  name: 'searchOrganization',
  pure: false
})
export class SearchOrganizationPipe implements PipeTransform {

  transform(value: Array<Organization>, filterName: string, attribute: string){
    return value.filter((item:any)=> {return item[attribute].toLowerCase().includes(filterName.toLowerCase())})
  }

}
