import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  latLong = {
    lat: '21.839267',
    long: '-102.712325'
  };

  markers: any[] = [];/* = [
    {
      lat: 'marker latitude',
      long: 'marker longitude',
      labelDetails: {
        text: 'Marker Text display on marker this is required',
        fontWeight: 'normal',
        fontSize: '12px',
        color: 'white'
      }
    }
  ];*/

  constructor(public service: CrudService) { }

  data: any[];

  ngOnInit(): void {
    this.service.get('getMapa').then(r => {
      let a: any = r;
      if (a.success) {
        //this.markers = a.data;

        for (let i = 0; i < a.data.length; i++) {
          const element = a.data[i];
          let f = {
            lat: element.latutud,
            long: element.longitud,
            labelDetails: {
              text: element.oasa,
              fontWeight: 'normal',
              fontSize: '12px',
              color: 'black'
            },
            detalles: element
          }
          this.markers.push(f)
        }
        console.log(this.markers);
      }

    })

  }

  yourComponentMethod(event) {
    console.log(this.markers[event.rowClicked].detalles);

  }

}