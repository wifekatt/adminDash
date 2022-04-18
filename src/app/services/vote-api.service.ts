import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteApiService {

  constructor(private httpClient : HttpClient ) { }

  postVote(data : any ){
    return this.httpClient.post<any>("http://localhost:3000/vote/",data);
  }

  getVote(){
    return this.httpClient.get<any>("http://localhost:3000/vote/");
  }

  putVote(data : any , id : number){
    return this.httpClient.put<any>("http://localhost:3000/vote/"+id ,data);
  }

  deleteVote(id : number){
    return this.httpClient.delete<any>("http://localhost:3000/vote/"+id);
  }
}
