import { Injectable } from '@angular/core';
import { Organization } from '../interfaces/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationListService {

  private organizations: Organization[] = [];

  constructor() { }

  addAnOrganization(organization: Organization){
    this.organizations.push(organization);
  }
  getOrganizations(){
    return this.organizations;
  }
}
