import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPadronAcuicolaComponent } from 'src/app/dialog/dialog-padron-acuicola/dialog-padron-acuicola.component';

@Component({
  selector: 'app-padron-acuicola',
  templateUrl: './padron-acuicola.component.html',
  styleUrls: ['./padron-acuicola.component.scss']
})
export class PadronAcuicolaComponent implements OnInit {

  constructor(public _dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  opendialog(){
    const dialogRef = this._dialog.open(DialogPadronAcuicolaComponent, {
      width: "60%"
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
