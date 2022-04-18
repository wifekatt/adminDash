import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private httpClient : HttpClient ) { }

  postUser(data : any ){
    return this.httpClient.post<any>("http://localhost:3000/Users/",data);
  }

  getUser(){
    return this.httpClient.get<any>("http://localhost:3000/Users/");
  }

  putUser(data : any , id : number){
    return this.httpClient.put<any>("http://localhost:3000/Users/"+id ,data);
  }

  deleteUser(id : number){
    return this.httpClient.delete<any>("http://localhost:3000/Users/"+id);
  }
}
