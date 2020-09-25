import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogUsuariosComponent } from 'src/app/dialog/dialog-usuarios/dialog-usuarios.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor(public _dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  opendialog(){
    const dialogRef = this._dialog.open(DialogUsuariosComponent, {
      width: "60%"
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
