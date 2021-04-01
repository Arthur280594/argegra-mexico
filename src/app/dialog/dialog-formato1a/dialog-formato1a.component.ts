import { Component, Inject, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
=======
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
>>>>>>> cab5723f347b1c9cc3fade3d4a9a673527a40b4c
import { CrudService } from 'src/app/services/crud/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-padron-acuicola',
  templateUrl: './dialog-padron-acuicola.component.html',
  styleUrls: ['./dialog-padron-acuicola.component.scss']
})
export class DialogPadronAcuicolaComponent implements OnInit {

<<<<<<< HEAD
 
=======
>>>>>>> cab5723f347b1c9cc3fade3d4a9a673527a40b4c
  constructor(public dialogRef: MatDialogRef < any >,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _services: CrudService) { }
    response:any;
<<<<<<< HEAD
    tipo_agente:any []=[];

    ngOnInit(): void {
      console.log(this.data);

      this._services.get("formato_1a").then(m => {
        this.response = m;
        console.log(this.response);
        if(this.response.success){
          this.tipo_agente = this.response.data;
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
=======
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
>>>>>>> cab5723f347b1c9cc3fade3d4a9a673527a40b4c
