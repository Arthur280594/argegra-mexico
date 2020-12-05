import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterPipe } from 'ngx-filter-pipe';
import { DialogUsuariosComponent } from 'src/app/dialog/dialog-usuarios/dialog-usuarios.component';
import { CrudService } from 'src/app/services/crud/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor(public _dialog: MatDialog, public crud: CrudService, private filterPipe: FilterPipe,) { 
    console.log(filterPipe.transform(this.data, { nombre: ''}));
   }

  response:     any   = {};
  data:       any[]   = [];
  dataFilter: any = { nombre: '' };
  p: number = 1;

  ngOnInit(): void {
    this.crud.get("usuarios").then(m => {
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
        id_usuario : 0
      }
    }
    const dialogRef = this._dialog.open(DialogUsuariosComponent 
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
          this.crud.post('delete_usuarios',item).then(r => {
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

