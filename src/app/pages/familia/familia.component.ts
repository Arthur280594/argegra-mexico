import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFamiliaComponent } from 'src/app/dialog/dialog-familia/dialog-familia.component';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.scss']
})
export class FamiliaComponent implements OnInit {

  constructor(public _dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  
  opendialog(){
    const dialogRef = this._dialog.open(DialogFamiliaComponent,{
      width: "60%"
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
