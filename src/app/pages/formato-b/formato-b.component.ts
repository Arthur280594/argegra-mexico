import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormatoBComponent } from 'src/app/dialog/dialog-formato-b/dialog-formato-b.component';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-formato-b',
  templateUrl: './formato-b.component.html',
  styleUrls: ['./formato-b.component.scss']
})
export class FormatoBComponent implements OnInit {

  constructor(public _dialog: MatDialog, public crud:CrudService,) { }

  response:     any   = {};
  data:       any[]   = [];

  ngOnInit(): void {
    this.crud.get("formato_1b").then(m => {
      this.response = m; 
      console.log(this.response);
      if(this.response.success){
        this.data = this.response.data;
      }
    })
  }

  opendialog(){
    const dialogRef = this._dialog.open(DialogFormatoBComponent, {
      width: "60%"
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
