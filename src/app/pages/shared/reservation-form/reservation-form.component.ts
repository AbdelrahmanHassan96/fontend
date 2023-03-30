import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  //reservationForm : FormGroup;
  
  constructor(private fb: FormBuilder) {
    //this.createForm();
   }

  //  createForm() {
  //   this.reservationForm = this.fb.group({
  //     day: ['', Validators.required],
  //     start: ['', Validators.required],
  //     duration: ['', Validators.required],
  //     password: ['']
  //   });
  // }

  // onSubmit() {
  //   // Submit reservation to API
  // }
  ngOnInit(): void {
  }

}
