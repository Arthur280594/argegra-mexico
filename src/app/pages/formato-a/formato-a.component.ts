import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterPipe } from 'ngx-filter-pipe';
import { DialogFormato1aComponent } from 'src/app/dialog/dialog-formato1a/dialog-formato1a.component';
import { CrudService } from 'src/app/services/crud/crud.service';
import Swal from 'sweetalert2';
import { PdfMakeWrapper, Table, Cell, Columns, Txt, Item } from 'pdfmake-wrapper';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';


@Component({
  selector: 'app-formato-a',
  templateUrl:'./formato-a.component.html',
  styleUrls: ['./formato-a.component.scss']
})
export class FormatoAComponent implements OnInit {
  

  constructor(public _dialog: MatDialog, public crud: CrudService, private filterPipe: FilterPipe,) { 
    console.log(filterPipe.transform(this.data, { folio: ''}));
  }

 

  response:     any   = {};
  data:       any[]   = [];
  dataFilter: any = { folio: '' };
  p: number = 1;
  especie: any ;
  ngOnInit(): void {
    this.crud.get("formato_1a").then(m => {
      this.response = m; 
      console.log(this.response);
      if(this.response.success){
        this.data = this.response.data;
      }
    })
  }

  generarPDF(){

    let tabla = [['Folio', 'Fecha', 'Especie', 'Bacterias', 'Parásitos', 'Virus', 'Hongos', 'Laboratorio Presuntivo', 'Diágnostico Presuntivo', 'Laboratorio', 'Fecha Envio', 'Fecha Entrega',  'Prevalencia' ,'Incidencia','Tipo Análisis', 'Enfermedad', 'Padrón Acuícola']]
  
  for (let i = 0; i < this.data.length; i++) {
                      const element = this.data[i];
                      tabla.push([
                          element.folio,
                          element.fecha,element.especie_nombre_comun, element.bacterias,
                          element.paracitos, element.virus, element.hongos, element.laboratorio_presuntivo,
                          element.diagnostico_presuntivo, element.laboratorio_oficial, element.fecha_envio,
                          element.fecha_entrega, element.prevalencia, element.incidencia,
                          element.nombre_tipo_analisis, element.nombre_enfermedad,
                          element.oasa
                      ])
                  }
  
  console.log(tabla);
                    // Set the fonts to use
                  PdfMakeWrapper.setFonts(pdfFonts);
  
                  const pdf = new PdfMakeWrapper();
  
                  pdf.pageMargins([20,20,20,20]);
                  pdf.pageOrientation('landscape');
                  pdf.pageSize('A4');
                  pdf.defaultStyle({
                      fontSize: 7,
                      alignment: 'center'
                  });
                  pdf.add(new Table(tabla).layout('lightHorizontalLines').end);
  
                  pdf.create().download('Formato1a.pdf');
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
        id_formato_1a : 0
      }
    }
    const dialogRef = this._dialog.open(DialogFormato1aComponent
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
      text: "Estas seguro de eliminar "+item.folio,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.crud.post('delete_formato_1a',item).then(r => {
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
