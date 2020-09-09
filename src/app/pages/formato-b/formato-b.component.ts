import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormatoBComponent } from 'src/app/dialog/dialog-formato-b/dialog-formato-b.component';

@Component({
  selector: 'app-formato-b',
  templateUrl: './formato-b.component.html',
  styleUrls: ['./formato-b.component.scss']
})
export class FormatoBComponent implements OnInit {

  constructor(public _dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  opendialog(){
    const dialogRef = this._dialog.open(DialogFormatoBComponent, {
      width: "60%"
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
