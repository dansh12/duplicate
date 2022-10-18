
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganizationListService } from 'src/app/services/organization-list/organization-list.service';
import { AddOrganizationComponent } from '../add-organization/add-organization.component';
import {MatDividerModule} from '@angular/material/divider';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  organizations = this.organizationListService.getOrganizations();
  search='';

  constructor(private organizationListService: OrganizationListService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(AddOrganizationComponent);
  }
  
}
