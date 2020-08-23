import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public crud: CrudService,public router: Router) { }

  public hide:boolean      = true;
  public loading:boolean   = false
  public credenciales: any = {
                              usuario: "",
                              password: ""
                             };
  public response:any = {success: true};

  ngOnInit(): void {
    if(localStorage.getItem("logeado")){
      this.router.navigate([""]);
    }
  }

  login(){
    this.loading = true;

    this.crud.post("login",this.credenciales).then(m =>{
      setTimeout(() => {
        this.response = m;
        if(this.response.success){
          localStorage.setItem("user", JSON.stringify(this.response.usuario));
          localStorage.setItem("logeado","true");
          this.router.navigate([""]);
        }      
      this.loading = false;
    },3000)
      
    })
    
  }

}
