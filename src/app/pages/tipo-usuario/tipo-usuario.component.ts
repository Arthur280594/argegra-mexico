import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTipoUsuariosComponent } from 'src/app/dialog/dialog-tipo-usuarios/dialog-tipo-usuarios.component';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.component.html',
  styleUrls: ['./tipo-usuario.component.scss']
})
export class TipoUsuarioComponent implements OnInit {

  constructor(public _dialog: MatDialog, public crud: CrudService) { }
  response:     any   = {};
  data:       any[]   = [];

  ngOnInit(): void {

    this.crud.get("tipo_usuario").then(m => {
      this.response = m;
      console.log(this.response);
      if(this.response.success){
        this.data = this.response.data;
      }
    })

  }
  opendialog(){
    const dialogRef = this._dialog.open(DialogTipoUsuariosComponent, {
      width: "60%"
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}