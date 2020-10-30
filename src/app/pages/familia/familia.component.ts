import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFamiliaComponent } from 'src/app/dialog/dialog-familia/dialog-familia.component';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.scss']
})
export class FamiliaComponent implements OnInit {

  constructor( public _dialog: MatDialog, public crud: CrudService,) { }

  response:     any   = {};
  data:       any[]   = []; 
  p: number = 1;

  ngOnInit(): void {

    this.crud.get("familia").then(m => {
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

  opendialog(item){

    if(item == null){
      item = {
        id_familia : 0
      }
    }
    const dialogRef = this._dialog.open(DialogFamiliaComponent
      , {
        data: item, 
        width: "55%"
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    }
  
  }

