import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-formato-b',
  templateUrl: './dialog-formato-b.component.html',
  styleUrls: ['./dialog-formato-b.component.scss']
})
export class DialogFormatoBComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef < any > ,
               @Inject(MAT_DIALOG_DATA) public data: any,
               public _services: CrudService) { }
               response:any;
               entidad_federativa:any []=[];
               padron: any []=[];

  ngOnInit(): void {
    console.log(this.data);

      this._services.get("entidad_federativa").then(m => {
        
        this.response = m; 
        console.log(this.response);
        if(this.response.success){
          this.entidad_federativa = this.response.data;
        }
      })
      this._services.get('getPadronAcuicola').then(m => {
        this.response = m;
        console.log(this.response);
        if(this.response.success){
          this.padron = this.response.data;
        }
        
      })
  }
  guardar(){
    this._services.post('post_formato_1b',this.data).then(r=>{
      console.log(r);
      let response : any = r;
      if(response.success){
        Swal.fire({
          icon: "success",
          title: 'Exito',
          text: response.message
        })
        this.dialogRef.close();
      }else{
        Swal.fire({
          icon: "error",
          title: 'Error',
          text: response.message
        })
      }
    })
  }
}

