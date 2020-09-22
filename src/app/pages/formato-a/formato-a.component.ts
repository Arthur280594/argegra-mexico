import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormato1aComponent } from 'src/app/dialog/dialog-formato1a/dialog-formato1a.component';

@Component({
  selector: 'app-formato-a',
  templateUrl: './formato-a.component.html',
  styleUrls: ['./formato-a.component.scss']
})
export class FormatoAComponent implements OnInit {

  constructor(public _dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  opendialog(){
    const dialogRef = this._dialog.open(DialogFormato1aComponent, {
      width: "60%"
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
