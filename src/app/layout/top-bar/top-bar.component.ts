import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../layout.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(public layout: LayoutComponent) { }

  public usuario:any;

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem("user"));
    console.log(this.usuario);
  }

  salir(){
    localStorage.removeItem("logeado");
    this.layout.ngOnInit();
  }

}
