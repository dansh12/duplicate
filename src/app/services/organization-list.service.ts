import { Injectable } from '@angular/core';
import { Organization } from '../interfaces/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationListService {

  private organizations: Organization[] = [{
    name:"Organization Name 1",
    logo:"https://upload.wikimedia.org/wikipedia/commons/a/a7/Wikipedia_logo_v3.svg",
    tracking: 1245,
    protection: 1245,
  }];

  constructor() { }

  addAnOrganization(organization: Organization){
    this.organizations.push(organization);
  }
  getOrganizations(){
    return this.organizations;
  }
}
