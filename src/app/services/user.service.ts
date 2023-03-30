import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public loged :boolean= false;
  MAINURL="http://localhost:3000/"
  constructor(private _http:HttpClient) { }
  
  signup(obj:any):Observable<any>{
    return this._http.post(`${this.MAINURL}Signup`,obj)
  }
  signin(obj:any):Observable<any>{
    return this._http.post(`${this.MAINURL}signin`,obj)
  }
  verifyMe():Observable<any>{
    return this._http.post(`${this.MAINURL}verifyMe`,null)
  }
  signout():Observable<any>{
    return this._http.get(`${this.MAINURL}logout`)
  }
  signoutAll():Observable<any>{
    return this._http.get(`${this.MAINURL}logout`)
  }

}
