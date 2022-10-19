import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { OrganizationListService } from 'src/app/services/organization-list/organization-list.service';
import { UtilitiesServiceService } from 'src/app/services/utilities-service/utilities-service.service';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss']
})
export class AddOrganizationComponent implements OnInit {
  organizationForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    logo: new FormControl(null, [Validators.required, Validators.pattern(`^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?\$`)]),
    tracking: new FormControl(null, Validators.required),
    protection: new FormControl(null, Validators.required)
  });

  constructor(private OrganizationService: OrganizationListService, public dialogRef: MatDialogRef<AddOrganizationComponent>, private dialog: MatDialog, private UtilitiesService: UtilitiesServiceService) { }

  onSubmit() {
    this.OrganizationService.addAnOrganization({ id: this.UtilitiesService.generateId(), name: this.organizationForm.controls['name'].value!, logo: this.organizationForm.controls['logo'].value!, tracking: this.organizationForm.controls['tracking'].value!, protection: this.organizationForm.controls['protection'].value! })
    this.organizationForm.reset();
    this.dialogRef.close();
    this.dialog.open(LoadingSpinnerComponent);
  }

  ngOnInit(): void {
  }

}
