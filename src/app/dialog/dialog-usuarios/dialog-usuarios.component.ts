import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-usuarios',
  templateUrl: './dialog-usuarios.component.html',
  styleUrls: ['./dialog-usuarios.component.scss']
})
export class DialogUsuariosComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef < any > ,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _services: CrudService) { }
    response:any;
    entidad_federativa:any []=[];
    tipo_usuario:any []=[];

    ngOnInit(): void {
      console.log(this.data);


      this._services.get("entidad_federativa").then(m => {

        this.response = m;
        console.log(this.response);
        if(this.response.success){
          this.entidad_federativa = this.response.data;
        }
      })
      this._services.get("tipo_usuario").then(m => {

        this.response = m;
        console.log(this.response);
        if(this.response.success){
          this.tipo_usuario = this.response.data;
        }
      })
    }
            
    guardar(){
      this._services.post('post_usuarios',this.data).then(r=>{
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