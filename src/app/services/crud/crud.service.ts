import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public http: HttpClient) { }

  public baseUrl:string = "http://localhost/residencias-back/";
  
  public config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      }
    }

  get(url){
    return new Promise((succes,rejec)=>{
     this.http.get(this.baseUrl+url).subscribe((response)=>{
       succes(response);
     },(err)=>{
       rejec(err);
     })
    })
  }

  post(url, data){
    return new Promise((succes,rejec)=>{
      let headers = new HttpHeaders();
     this.http.post(this.baseUrl+url, data, {headers: headers}).subscribe((response)=>{
       succes(response);
     },(err)=>{
       rejec(err);
     })
    })
  }
  
}