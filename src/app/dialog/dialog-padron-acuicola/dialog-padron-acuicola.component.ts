import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-padron-acuicola',
  templateUrl: './dialog-padron-acuicola.component.html',
  styleUrls: ['./dialog-padron-acuicola.component.scss']
})
export class DialogPadronAcuicolaComponent implements OnInit {

 
  constructor(public dialogRef: MatDialogRef < any >,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _services: CrudService) { }
    response:any;
    tipo_agente:any []=[];

    ngOnInit(): void {
      console.log(this.data);

      this._services.get("padron_acuicola").then(m => {
        this.response = m;
        console.log(this.response);
        if(this.response.success){
          this.tipo_agente = this.response.data;
        }
      })
  
    }
    
   
    guardar(){
      this._services.post('post_padron_acuicola', this.data).then(r=>{
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
  