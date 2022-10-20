import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Organization } from 'src/app/interfaces/organization';
import { OrganizationListService } from 'src/app/services/organization-list/organization-list.service';
import { AlertComponent } from '../alert/alert.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  trackingAssigned !: number;
  protectionAssigned!: number;
  @Input() organization!: Organization;
  constructor(public organizationListService: OrganizationListService, public dialog: MatDialog) { }
  organizationList = this.organizationListService.getOrganizations();
  ngOnInit(): void {
  }
  deleteOrganization() {
    const dialogRef = this.dialog.open(AlertComponent);
    dialogRef.afterClosed().subscribe(dialogResult => {
      dialogResult ? this.organizationListService.deleteOrganization(this.organization.id) : null
    });
  }
}
