import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CondidateListApiService {

  constructor(private httpClient : HttpClient ) { }

  postList(data : any ){
    return this.httpClient.post<any>("http://localhost:3000/condidateList/",data);
  }

  getList(){
    return this.httpClient.get<any>("http://localhost:3000/condidateList/");
  }

  putList(data : any , id : number){
    return this.httpClient.put<any>("http://localhost:3000/condidateList/"+id ,data);
  }

  deleteList(id : number){
    return this.httpClient.delete<any>("http://localhost:3000/condidateList/"+id);
  }
}
