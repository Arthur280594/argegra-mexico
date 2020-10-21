import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEspecieComponent } from 'src/app/dialog/dialog-especie/dialog-especie.component';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-especie',
  templateUrl: './especie.component.html',
  styleUrls: ['./especie.component.scss']
})
export class EspecieComponent implements OnInit {

  constructor(public _dialog: MatDialog, public crud:CrudService,) { }

  response:     any   = {};
  data:       any[]   = [];
  p: number = 1;

  ngOnInit(): void {
    this.crud.get("especie").then(m => {
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
    const dialogRef = this._dialog.open(DialogEspecieComponent, {
      width: "60%"
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}

