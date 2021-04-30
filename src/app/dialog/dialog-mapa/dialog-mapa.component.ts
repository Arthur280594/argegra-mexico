import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-dialog-mapa',
  templateUrl: './dialog-mapa.component.html',
  styleUrls: ['./dialog-mapa.component.scss']
})
export class DialogMapaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef< any >,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _services: CrudService) { }

    especies:any []=[];
    response:any;

  ngOnInit(): void {
    this._services.get("especie").then(m => {
        
      this.response = m; 
      console.log(this.response);
      if(this.response.success){
        this.especies = this.response.data;
      }
    })
  }
  

  yourComponentMethod(): void {
    console.log(this.data)
    this.dialogRef.close();
  }
}
