import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  isSubmit = false
  reservationForm = new FormGroup({
    day: new FormControl(''),
    start: new FormControl(''),
    duration: new FormControl(''),
    end:new FormControl(''),
    password: new FormControl(''),


  })
  reservation:any={
    day:'',
    start:'',
    end:'',
    duration:'',
    password:''
  }
  constructor(private _reservation:ReservationService ,private _router :Router) {
    
    this.reservationForm.patchValue(this.reservation)
   }
   
  ngOnInit(): void {
  }
  handleSubmit(){
    this.isSubmit = true
    console.log(this.reservationForm.value)
    this._reservation.addReservation(this.reservationForm.value).subscribe(res=>{
      console.log(res)
    },
    ()=>{
    },
    ()=>{
      this._router.navigateByUrl("/showSchedle")
    }
    )
  }

}
