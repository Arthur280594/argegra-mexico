import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterPipe } from 'ngx-filter-pipe';
import { DialogTipoAnalisisComponent } from 'src/app/dialog/dialog-tipo-analisis/dialog-tipo-analisis.component';
import { CrudService } from 'src/app/services/crud/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-analisis',
  templateUrl: './tipo-analisis.component.html',
  styleUrls: ['./tipo-analisis.component.scss']
})
export class TipoAnalisisComponent implements OnInit {

  constructor(public _dialog: MatDialog, public crud: CrudService, private filterPipe: FilterPipe,) { 
    console.log(filterPipe.transform(this.data, { nombre: ''}));
   }

  response:  any = {};
  data:    any = [];dataFilter: any = { nombre: '' };
  p: number = 1;

  ngOnInit(): void {

    this.crud.get("tipo_analisis").then(m => {
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
        id_tipo_analisis : 0
      }
    }
    const dialogRef = this._dialog.open(DialogTipoAnalisisComponent
      , {
      data: item, 
        width: "55%"
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
          this.crud.post('delete_tipo_analisis',item).then(r => {
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

