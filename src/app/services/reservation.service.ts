import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  MAINURL="http://localhost:3000/reservation/"

  reservations :any = [
    {
      day:new Date('2023-03-31T00:00:00.000+00:00')
      ,
      start:new Date('2023-03-31T08:00:00.000+00:00')
      ,
      end:new Date('2023-03-31T09:00:00.000+00:00')
      ,
      duration:
      60
    },
    {
      day:new Date('2023-03-31T00:00:00.000+00:00')
      ,
      start:new Date('2023-03-31T08:00:00.000+00:00')
      ,
      end:new Date('2023-03-31T09:00:00.000+00:00')
      ,
      duration:
      60
    },
    {
      day:new Date('2023-03-31T00:00:00.000+00:00')
      ,
      start:new Date('2023-03-31T08:00:00.000+00:00')
      ,
      end:new Date('2023-03-31T09:00:00.000+00:00')
      ,
      duration:
      60
    },

  ]
   

  constructor(private _http:HttpClient) { }

  addReservation(obj:any):Observable<any>{
    return this._http.post(`${this.MAINURL}add`,obj)
    console.log(this._http.post(`${this.MAINURL}add`,obj))
  }
  showReservation():Observable <any>{
    return this._http.get(`${this.MAINURL}show`)
  }
  deleteReservation(id:any){
    return this._http.delete(`${this.MAINURL}cancel/${id}`)
  }
  showSchedule():Observable <any>{
    return this._http.get(`${this.MAINURL}getWeekSchedle`)
  }

}
