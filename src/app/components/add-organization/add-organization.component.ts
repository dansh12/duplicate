import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { OrganizationListService } from 'src/app/services/organization-list.service';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss']
})
export class AddOrganizationComponent implements OnInit {
  organization = new FormGroup({
    name: new FormControl(null,Validators.required),
    logo: new FormControl(null,Validators.required),
    tracking: new FormControl(null, Validators.required),
    protection: new FormControl(null, Validators.required)
  });
  name='';
  logo='';
  tracking!: number;
  protection!: number;
  constructor(private OrganizationService:OrganizationListService,public dialogRef: MatDialogRef<AddOrganizationComponent>) { }
  
  onSubmit(){
    this.OrganizationService.addAnOrganization({name:this.name, logo: this.logo, tracking: this.tracking, protection: this.protection})
    this.organization.reset();
    this.dialogRef.close();
  }
  isVallidImageUrl(){
    const pattern = new RegExp('^(https?:\\/\\/)?'+ 
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
    '(\\#[-a-z\\d_]*)?$','i');
  return !!pattern.test(this.logo);
  }
  

  ngOnInit(): void {
  }

}
