import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private httpClient : HttpClient ) { }

  postAdmin(data : any ){
    return this.httpClient.post<any>("http://localhost:3000/admins/",data);
  }

  getAdmin(){
    return this.httpClient.get<any>("http://localhost:3000/admins/");
  }

  putAdmin(data : any , id : number){
    return this.httpClient.put<any>("http://localhost:3000/admins/"+id ,data);
  }

  deleteAdmin(id : number){
    return this.httpClient.delete<any>("http://localhost:3000/admins/"+id);
  }
}
