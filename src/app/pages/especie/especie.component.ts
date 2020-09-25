import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEspecieComponent } from 'src/app/dialog/dialog-especie/dialog-especie.component';

@Component({
  selector: 'app-especie',
  templateUrl: './especie.component.html',
  styleUrls: ['./especie.component.scss']
})
export class EspecieComponent implements OnInit {

  constructor(public _dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  opendialog(){
    const dialogRef = this._dialog.open(DialogEspecieComponent, {
      width: "60%"
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}

