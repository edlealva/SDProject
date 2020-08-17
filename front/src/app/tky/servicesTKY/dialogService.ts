import { MatConfirmDialogComponent } from './../modal_message/modal_message';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  

  openConfirmDialog(tip,msg:Object){
   return this.dialog.open(MatConfirmDialogComponent,{
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: "10px" },
      data :{
        tipo:tip,
        message : msg
      }
    });
  }
}