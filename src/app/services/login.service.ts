import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginUrl = "http://localhost:3000/Login";

  constructor(private httpClient : HttpClient ) { }

  
}
