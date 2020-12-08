import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPadronAcuicolaComponent } from 'src/app/dialog/dialog-padron-acuicola/dialog-padron-acuicola.component';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-padron-acuicola',
  templateUrl: './padron-acuicola.component.html',
  styleUrls: ['./padron-acuicola.component.scss']
})
export class PadronAcuicolaComponent implements OnInit {

  constructor(public _dialog: MatDialog,
              public service: CrudService) { }

  data: any [];
  ngOnInit(): void {
    this.service.get('getPadronAcuicola').then(r => {
      console.log(r);
      let a:any = r;
      if(a.success){
        this.data = a.data;
      }
      
    })
  }

  opendialog(){
    const dialogRef = this._dialog.open(DialogPadronAcuicolaComponent, {
      width: "60%"
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
