import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isSubmit = false
  loginData = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')

  })
  user:any={
    email:'',
    password:''
  }
  constructor(private _user:UserService,private _router:Router) { 
    this.loginData.patchValue(this.user)
  }

  ngOnInit(): void {
  }
  handleSubmit(){
    this.isSubmit = true
    this._user.signup(this.loginData.value).subscribe(res=>{
      console.log(res)
      localStorage.setItem('token' , `Bearer ${res.token}`)
    },
    ()=>{
    },
    ()=>{
      this._router.navigateByUrl("/showSchedle")
    }
    )
  }

}
