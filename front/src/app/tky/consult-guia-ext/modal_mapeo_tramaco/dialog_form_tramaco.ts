import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'dialog_form_tramaco',
    templateUrl: 'dialog_form_tramaco.html',
  })
  
  export class DialogFormTramaco {
  
    constructor(
      public dialogRef: MatDialogRef<DialogFormTramaco>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        console.log(data)
      }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }