import { Component, Inject, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-ajouter-commercial',
  templateUrl: './ajouter-commercial.component.html',
  styleUrls: ['./ajouter-commercial.component.scss']
})
export class AjouterCommercialComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(AjouterCommercialComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}