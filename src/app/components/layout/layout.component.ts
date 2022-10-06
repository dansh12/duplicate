
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganizationListService } from 'src/app/services/organization-list.service';
import { AddOrganizationComponent } from '../add-organization/add-organization.component';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  organizations = this.organizationListService.getOrganizations();
  search='';

  openDialog(): void {
    this.dialog.open(AddOrganizationComponent);
  }


  constructor(private organizationListService: OrganizationListService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
