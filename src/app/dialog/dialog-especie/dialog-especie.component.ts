import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-especie',
  templateUrl: './dialog-especie.component.html',
  styleUrls: ['./dialog-especie.component.scss']
})
export class DialogEspecieComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef < any >,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _services: CrudService) { }
    response:any;
    familia:any []=[];

    ngOnInit(): void {
      console.log(this.data);
      this._services.get("familia").then(m => {
        this.response = m;
        console.log(this.response);
        if(this.response.success){
          this.familia = this.response.data;
        }
      })
    }
   
    guardar(){
      this._services.post('post_especie', this.data).then(r=>{
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
  
  
  