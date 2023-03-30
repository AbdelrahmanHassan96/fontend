import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/interfaces/reservation'

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  reservations:any 
  constructor(private _reservation:ReservationService) { }

  ngOnInit(): void {
    this.reload()
  }
  reload(){
    this._reservation.showReservation().subscribe(
      data=>{
        this.reservations=data.data
      }
    )
  } 
  deleteReservation(index:any){
    this._reservation.deleteReservation(index).subscribe({
      next:()=> this.reload()
    })
  }
}
