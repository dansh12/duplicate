import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-check-response',
  templateUrl: './check-response.component.html',
  styleUrls: ['./check-response.component.scss']
})
export class CheckResponseComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CheckResponseComponent>,
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
