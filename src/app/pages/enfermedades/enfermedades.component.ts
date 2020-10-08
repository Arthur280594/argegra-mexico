import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEnfermedadesComponent } from 'src/app/dialog/dialog-enfermedades/dialog-enfermedades.component';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-enfermedades',
  templateUrl: './enfermedades.component.html',
  styleUrls: ['./enfermedades.component.scss']
})
export class EnfermedadesComponent implements OnInit {

  constructor(public _dialog: MatDialog, public crud: CrudService,) { }

  response:     any   = {};
  data:       any[]   = [];
  ngOnInit(): void {

    this.crud.get("enfermedades").then(m => {
      this.response = m; 
      console.log(this.response);
      if(this.response.success){
        this.data = this.response.data;
      }
    })
  }

  opendialog(){
    const dialogRef = this._dialog.open(DialogEnfermedadesComponent, {
      width: "60%"
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
