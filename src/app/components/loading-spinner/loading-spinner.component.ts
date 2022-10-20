import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<LoadingSpinnerComponent>) { }

  ngOnInit(): void {
    setTimeout(()=>{this.dialogRef.close()},3000);
  }

}
