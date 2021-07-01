import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor() { }
  public usuario:any;

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem("user"));
    console.log(this.usuario);
  }
}
