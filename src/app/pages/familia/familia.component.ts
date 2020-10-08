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

  ngOnInit(): void {

    this.crud.get("familia").then(m => {
      this.response = m;
      console.log(this.response);
      if(this.response.success){
        this.data = this.response.data;
      }
    })

  }
  opendialog(){
    const dialogRef = this._dialog.open(DialogFamiliaComponent
      , {
        width: "55%"
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
      });
    }
  
  }

