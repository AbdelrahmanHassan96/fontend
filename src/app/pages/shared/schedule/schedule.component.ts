import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  reservations:any
  constructor(private _reservation:ReservationService) { }

  ngOnInit(): void {
    this._reservation.showSchedule().subscribe(
      data=>{
        this.reservations=data.data
      }
    )
  }

}
