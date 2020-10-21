import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTipoAnalisisComponent } from 'src/app/dialog/dialog-tipo-analisis/dialog-tipo-analisis.component';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-tipo-analisis',
  templateUrl: './tipo-analisis.component.html',
  styleUrls: ['./tipo-analisis.component.scss']
})
export class TipoAnalisisComponent implements OnInit {

  constructor(public _dialog: MatDialog, public crud: CrudService) { }

  response:  any = {};
  data:    any = [];
  p: number = 1;

  ngOnInit(): void {

    this.crud.get("tipo_analisis").then(m => {
      this.response = m;
      console.log(this.response);
      if(this.response.success){
        this.data = this.response.data;
      }
    })
  }
  key: string = 'id';
  reverse: boolean = false;
  sort (key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  opendialog(){
    const dialogRef = this._dialog.open(DialogTipoAnalisisComponent, {
      width: "60%"
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
