import { Component, Input, OnInit } from '@angular/core';
import { Organization } from 'src/app/interfaces/organization';
import { OrganizationListService } from 'src/app/services/organization-list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  trackingAssigned !: number;
  protectionAssigned!: number;
  @Input() organization!: Organization;
  organizationList = this.organizationListService.getOrganizations();
  constructor(private organizationListService: OrganizationListService) { }

  ngOnInit(): void {
  }
  
  deleteCard(){
    this.organizationList.splice(this.organizationList.indexOf(this.organization),1);
  }
}
