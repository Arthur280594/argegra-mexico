import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEntidadFederativaComponent } from 'src/app/dialog/dialog-entidad-federativa/dialog-entidad-federativa.component';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-entidad-federativa',
  templateUrl: './entidad-federativa.component.html',
  styleUrls: ['./entidad-federativa.component.scss']
})
export class EntidadFederativaComponent implements OnInit {

  constructor(public _dialog: MatDialog, public crud: CrudService) { }
  response:     any   = {};
  data:       any[]   = [];

  ngOnInit(): void { 
    this.crud.get("entidad_federativa").then(m => {
    this.response = m;
    console.log(this.response);
    if(this.response.success){
      this.data = this.response.data;
    }
  })

}
opendialog(){
  const dialogRef = this._dialog.open(DialogEntidadFederativaComponent, {
    width: "60%"
  });

  dialogRef.afterClosed().subscribe(result => {
    
  });
}

}