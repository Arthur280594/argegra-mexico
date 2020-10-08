import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTipoAgenteComponent } from 'src/app/dialog/dialog-tipo-agente/dialog-tipo-agente.component';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-tipo-agente',
  templateUrl: './tipo-agente.component.html',
  styleUrls: ['./tipo-agente.component.scss']
})
export class TipoAgenteComponent implements OnInit {

  constructor(public _dialog: MatDialog, public crud: CrudService) { }

  response:     any   = {};
  data:       any[]   = [];

  ngOnInit(): void {

    this.crud.get("tipo_agente").then(m => {
      this.response = m;
      console.log(this.response);
      if(this.response.success){
        this.data = this.response.data;
      }
    })

  }
  opendialog(){
    const dialogRef = this._dialog.open(DialogTipoAgenteComponent, {
      width: "55%"
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
