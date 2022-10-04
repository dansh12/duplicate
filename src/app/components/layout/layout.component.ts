import { Component, OnInit } from '@angular/core';
import { OrganizationListService } from 'src/app/services/organization-list.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  organizations = this.organizationListService.getOrganizations();

  constructor(private organizationListService: OrganizationListService) { }

  ngOnInit(): void {
  }

}
