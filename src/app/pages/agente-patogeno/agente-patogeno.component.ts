import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAgentePatogenoComponent } from 'src/app/dialog/dialog-agente-patogeno/dialog-agente-patogeno.component';

@Component({
  selector: 'app-agente-patogeno',
  templateUrl: './agente-patogeno.component.html',
  styleUrls: ['./agente-patogeno.component.scss']
})
export class AgentePatogenoComponent implements OnInit {

  constructor(public _dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  opendialog(){
    const dialogRef = this._dialog.open(DialogAgentePatogenoComponent, {
      width: "60%"
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
