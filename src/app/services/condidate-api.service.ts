import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CondidateApiService {

  constructor(private httpClient : HttpClient ) { }

  postCondidate(data : any ){
    return this.httpClient.post<any>("http://localhost:3000/condidate/",data);
  }

  getCondidate(){
    return this.httpClient.get<any>("http://localhost:3000/condidate/");
  }

  putCondidate(data : any , id : number){
    return this.httpClient.put<any>("http://localhost:3000/condidate/"+id ,data);
  }

  deleteCondidate(id : number){
    return this.httpClient.delete<any>("http://localhost:3000/condidate/"+id);
  }
}
