import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-formato1a',
  templateUrl: './dialog-formato1a.component.html',
  styleUrls: ['./dialog-formato1a.component.scss']
})
export class DialogFormato1aComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef < any >,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _services: CrudService) { }
    response:any;
    especie:any []=[];
    tipo_analisis:any []=[];
    enfermedades:any []=[];

  ngOnInit(): void {
    console.log(this.data);
    this._services.get("especie").then(m => {
        
      this.response = m; 
      console.log(this.response);
      if(this.response.success){
        this.especie = this.response.data;
      }
    })

    this._services.get("tipo_analisis").then(m => {
      this.response = m;
      console.log(this.response);
      if(this.response.success){
        this.tipo_analisis = this.response.data;
      }
    })

    this._services.get("enfermedades").then(m => {
      this.response = m; 
      console.log(this.response);
      if(this.response.success){
        this.enfermedades = this.response.data;
      }
    })
  }

  guardar(){
    this._services.post('post_formato_1a', this.data).then(r=>{
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
