import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterPipe } from 'ngx-filter-pipe';
import { DialogAgentePatogenoComponent } from 'src/app/dialog/dialog-agente-patogeno/dialog-agente-patogeno.component';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-agente-patogeno',
  templateUrl: './agente-patogeno.component.html',
  styleUrls: ['./agente-patogeno.component.scss']
})
export class AgentePatogenoComponent implements OnInit {

  constructor(public _dialog: MatDialog, public crud: CrudService, private filterPipe: FilterPipe,) {
    console.log(filterPipe.transform(this.data, { nombre: ''}));
   }

  response:     any   = {};
  data:       any[]   = [];
  dataFilter: any = { nombre: '' };
  p: number = 1;
  ngOnInit(): void {

    this.crud.get("agente_patogeno").then(m => {
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
    const dialogRef = this._dialog.open(DialogAgentePatogenoComponent, {
      width: "60%"
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}

