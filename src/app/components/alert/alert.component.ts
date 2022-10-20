import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AlertComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any) {}

  onDismiss(){
    this.dialogRef.close(false);
  }
  onConfirm(){
    this.dialogRef.close(true);
  }
  ngOnInit(): void {
  }

}
