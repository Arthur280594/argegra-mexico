import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormatoBComponent } from 'src/app/dialog/dialog-formato-b/dialog-formato-b.component';
import { CrudService } from 'src/app/services/crud/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formato-b',
  templateUrl: './formato-b.component.html',
  styleUrls: ['./formato-b.component.scss']
})
export class FormatoBComponent implements OnInit {

  constructor(public _dialog: MatDialog, public crud:CrudService,) { }

  response:     any   = {};
  data:       any[]   = [];
  p: number = 1;

  ngOnInit(): void {
    this.crud.get("formato_1b").then(m => {
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
  opendialog(item){

    if(item == null){
      item = {
        id_formato_1b : 0
      }
    }
    const dialogRef = this._dialog.open(DialogFormatoBComponent
      , {
        data: item, 
        width: "60%"
      });
  

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  delete(item){
    Swal.fire({
      title: 'Estas a punto de eliminar',
      text: "Estas seguro de eliminar "+item.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.crud.post('delete_familia',item).then(r => {
          console.log(r)
          let response:any = r;
            if(response.success){
              Swal.fire({
                icon: "success",
                title: 'Exito',
                text: response.message
              })
              this.ngOnInit();
          }else{
            Swal.fire({
              icon: "error",
              title: 'Error',
              text: response.message
            })
          }
        })
      }
    })
    
    
  }
}

