import { Injectable } from '@angular/core';
import { Organization } from '../../interfaces/organization';


@Injectable({
  providedIn: 'root'
})
export class OrganizationListService {

  private organizations: Organization[] = [{
    id:0,
    name:"Organization Name 1",
    logo:"https://upload.wikimedia.org/wikipedia/commons/a/a7/Wikipedia_logo_v3.svg",
    tracking: 1245,
    protection: 1245
  },{
    id:1,
    name:"Organization Name 2",
    logo:"https://brandmark.io/logo-rank/random/snap.png",
    tracking: 1345,
    protection: 1265
  },{
    id:2,
    name:"Organization Name 3",
    logo:"https://brandmark.io/logo-rank/random/apple.png",
    tracking: 1345,
    protection: 1265
  },{
    id:3,
    name:"Organization Name 3",
    logo:"https://brandmark.io/logo-rank/random/pepsi.png",
    tracking: 1345,
    protection: 1265
  },{
    id:4,
    name:"Organization Name 4",
    logo:"https://brandmark.io/logo-rank/random/mcdonalds.png",
    tracking: 1345,
    protection: 1265
  },{
    id:5,
    name:"Organization Name 5",
    logo:"https://brandmark.io/logo-rank/random/twitter.png",
    tracking: 1345,
    protection: 1265
  },{
    id:6,
    name:"Organization Name 6",
    logo:"https://brandmark.io/logo-rank/random/beats.png",
    tracking: 1345,
    protection: 1265
  }];

  constructor() {}

  addAnOrganization(organization: Organization){
    this.organizations.push(organization);
  }
  getOrganizations(){
    return this.organizations;
  }
  deleteOrganization(id:number){
    this.organizations.splice(this.organizations.findIndex(organization=>{return organization.id == id}),1);
  }
}
