import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-agente-patogeno',
  templateUrl: './dialog-agente-patogeno.component.html',
  styleUrls: ['./dialog-agente-patogeno.component.scss']
})
export class DialogAgentePatogenoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef < any >,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _services: CrudService) { }

    ngOnInit(): void {
      console.log(this.data);
    }
   
    guardar(){
      this._services.post('post_agente_patogeno', this.data).then(r=>{
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
  